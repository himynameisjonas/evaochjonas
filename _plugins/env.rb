module Jekyll
  class EnvironmentVariablesGenerator < Generator
    def generate(site)
      site.config['simpleform_api_key'] = ENV['SIMPLEFORM_API_KEY'] || 'xxx'
      site.config['google_analytics'] = ENV['GOOGLE_ANALYTICS'] || 'xxx'
    end
  end
end
