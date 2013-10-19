module Jekyll
  class EnvironmentVariablesGenerator < Generator
    def generate(site)
      site.config['simpleform_api_key'] = ENV['SIMPLEFORM_API_KEY'] || 'xxx'
    end
  end
end
