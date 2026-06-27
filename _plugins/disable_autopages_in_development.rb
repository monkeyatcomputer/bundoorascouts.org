# frozen_string_literal: true

module BundooraScouts
  class DisableAutopagesInDevelopment < Jekyll::Generator
    safe true
    priority :highest

    def generate(site)
      return unless Jekyll.env == "development"

      site.config["autopages"] ||= {}
      site.config["autopages"]["enabled"] = false
    end
  end
end
