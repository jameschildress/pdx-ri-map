require 'json'
require 'uri'
require 'cgi'
require 'net/http'

uri = URI.parse('http://www.portlandonline.com/scripts/911incidents.cfm')

app = proc do |env|

  json = Net::HTTP.get(uri.host, uri.path).to_json
  callback = Rack::Request.new(env).params["callback"]
  response = "#{callback}(#{json})"

  [200, { "Content-Type" => "application/json" }, [response]]

end

run app