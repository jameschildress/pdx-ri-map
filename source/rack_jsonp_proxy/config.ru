require 'json'
require 'uri'
require 'cgi'
require 'net/http'



class ProxyApp

  # The base URL used by any API calls
  BASE_URL = 'http://api.civicapps.org/restaurant-inspections/'
  
  # Parameters to be passed to the API call as a query string
  QUERY_PARAMS = %w( distance limit )
  
  def call env
    
    # Get the request params
    params = Rack::Request.new(env).params
    
    puts params
    
    # Determine the API path to append based on the params included in the request
    uri = URI(
      if params['id']
        BASE_URL + "inspection/#{params['id']}"
      elsif params['lat'] && params['lng']
        BASE_URL + "near/#{params['lng']},#{params['lat']}"
      else
        raise "Required parameters were not included."
      end
    )
    
    # Pull the query parameters from the params hash
    query_params = params.dup.keep_if { |key, value| QUERY_PARAMS.include?(key) }
    
    # URL-encode the query params hash
    uri.query = URI.encode_www_form(query_params)
    
    # Call the API and save the response
    response = Net::HTTP.get_response(uri)
    
    # Raise an exception if the response status is not 200
    raise response.body unless response.is_a?(Net::HTTPSuccess)
    
    # Convert the response body to JSONP
    jsonp = "#{params["callback"]}(#{response.body})"
    
    [200, { "Content-Type" => "application/json" }, [jsonp]]
  
  # If any exceptions are raised, return a 400 Bad Request with an error message.
  rescue => e
    [400, { "Content-Type" => "text/plain" }, [e.message]]
  end

end



run ProxyApp.new