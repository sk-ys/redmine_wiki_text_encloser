require_dependency File.expand_path('../lib/wiki_text_encloser/hooks.rb', __FILE__)

Redmine::Plugin.register :redmine_wiki_text_encloser do
  name 'Redmine Wiki Text Encloser'
  author 'sk-ys'
  description 'Adds the ability to automatically enclose the selected text in the Wiki.'
  version '0.2.1'
  url 'https://github.com/sk-ys/redmine_wiki_text_encloser'
  author_url 'https://github.com/sk-ys'

  settings default: {
    target_start_symbols: "!\"#$%'(`{[</\\_~|",
    target_end_symbols: "!\"#$%')`}]>/\\_~|",
  },
    partial: 'settings/wiki_text_encloser'
end
