# Redmine Wiki Text Encloser

This is a plugin for Redmine.  
This plugin adds the ability to automatically enclose the selected text in the Wiki.

## Usage
1. Select the text you want to enclose.  
![01](doc/images/01_select_text.png)
2. Enter the symbol to enclose the text. The closing symbol will be automatically added.  
![02](doc/images/02_enter_symbol.png)

## Supported Symbols
- In version 0.2.0 or later, symbols can be customized in the plugin's settings screen.
    - ![plugin_settings](doc/images/plugin_settings.png)
    - Default symbols: !"#$%'(`{[</\\_~|

## Editor behavior

Configured symbol pairs are passed to JavaScript as escaped JSON, preserving quotes, backslashes, and line breaks. Each toolbar textarea is initialized once, including after toolbar redraws. Wrapping keeps the result selected and emits a bubbling `input` event so editor listeners can detect the change. Modifier shortcuts, IME composition, and read-only or disabled editors are left to their existing handlers. Only configured opening symbols with matching closing symbols wrap a nonempty selection.

Local checks on Redmine 7.0.2 / Rails 8.1.4 covered settings rendering, selection wrapping, preview/edit switching, redraws, and dynamically created editors at desktop and mobile widths. These checks used Ruby 4.0.7 and SQLite; they do not establish compatibility with every deployment or theme.

## Installation
### When using git
1. Clone this repository to your Redmine plugins directory.
    ```
    cd YOUR_REDMINE_DIRECTORY/plugins
    git clone https://github.com/sk-ys/redmine_wiki_text_encloser.git
    ```
2. Restart Redmine.

### When not using git
1. Download zip file from the [release page](https://github.com/sk-ys/redmine_wiki_text_encloser/releases) or the [latest main repository](https://github.com/sk-ys/redmine_wiki_text_encloser/archive/refs/heads/main.zip). 
2. Extract the ZIP file to your Redmine plugin directory. The name of the unzipped directory must be `redmine_wiki_text_encloser`.
3. Restart Redmine.
