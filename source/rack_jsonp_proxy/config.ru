require 'json'
require 'uri'
require 'cgi'
require 'net/http'



base_url = 'http://api.civicapps.org/restaurant-inspections/'



app = proc do |env|
  
  params = Rack::Request.new(env).params
  
  url = if params['id']
    base_url + "inspection/#{params['id']}"
  elsif params['lat'] && params['lng']
    base_url + "near/#{params['lng']},#{params['lat']}"
  else
    base_url
  end

  uri = URI.parse(url)

  json = Net::HTTP.get(uri.host, uri.path).to_json

  response = "#{params["callback"]}(#{json})"

  [200, { "Content-Type" => "application/json" }, [response]]

end



run app