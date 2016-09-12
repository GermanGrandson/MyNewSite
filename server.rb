require "sinatra"

get "/" do
  filer = File.join('public','NewSite.html')
  File.read(filter)

end
