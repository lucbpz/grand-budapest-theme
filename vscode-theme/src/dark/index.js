const {
  BG,
  BG2,
  BG3,
  INFO_BG,
  FG,
  FG_TH1,
  FG_TH2,
  FG_TH3,
  FG_TH4,
  FG_TH5,
  FG_TH6,
} = require('./colors');

const theme = {
  "$schema": "vscode://schemas/color-theme",
  "name": "Grand Budapest Dark",
  "type": "dark",
  "colors": {
    // activityBar
    "activityBar.background": BG,
    "activityBar.border": BG2,
    "activityBar.dropBackground": BG2,
    "activityBar.foreground": "#fff",
    "activityBarBadge.background": BG3,
    "activityBarBadge.foreground": "#000",
    // badge
    "badge.background": BG3,
    "badge.foreground": "#000",
    // button
    "button.background": INFO_BG,
    "button.foreground": "#fff",
    "button.hoverBackground": FG_TH1,
    // contrast
    "contrastActiveBorder": null,
    "contrastBorder": "#ffffff00",
    // debug
    "debugExceptionWidget.background": BG2,
    "debugExceptionWidget.border": FG,
    "debugToolBar.background": BG2,
    // description
    "descriptionForeground": FG,
    // diff
    "diffEditor.insertedTextBackground": "#00A69A22",
    "diffEditor.insertedTextBorder": "#00A69A44",
    "diffEditor.removedTextBackground": "#B81B1222",
    "diffEditor.removedTextBorder": "#B81B1244",
    // dropdown
    "dropdown.background": BG2,
    "dropdown.border": BG,
    "dropdown.foreground": "#fff",
    // editor
    // This is the main background color
    "editor.background": BG2,
    // this is the main text colour
    "editor.foreground": "#fff",
    // Okay this part is confusing as heck!
    // Currently found item
    "editor.findMatchBackground": "#FF720066",
    // Other Found Items int the document
    "editor.findMatchHighlightBackground": "#408fa766",
    // WTF is this one for? I don't know
    "editor.findRangeHighlightBackground": "#243E51",
    // When you hover over something and a popup shows, this highlights that thing
    "editor.hoverHighlightBackground": "#E6A2C533",
    // when you have something selected, but have lost focus on the editor
    "editor.inactiveSelectionBackground": `${BG}80`,
    // current line styles
    "editor.lineHighlightBackground": "#3C4475",
    "editor.lineHighlightBorder": "#424a80",
    "editor.rangeHighlightBackground": "#3C4475",
    // selected Text colours
    // This is the standard Select colour
    "editor.selectionBackground": "#74628A",
    // This is the colour of the other matching elements
    "editor.selectionHighlightBackground": "#74628A80",
    // if you tab away you can colour it differently, but ill leave this one out
    // "editor.inactiveSelectionBackground": "",
    // Word Highlights! This happens when you move your cursor inside a variable
    // Strong is the one where your cursor currently is
    "editor.wordHighlightStrongBackground": "#ffffff21",
    // and this one is the rest of them
    "editor.wordHighlightBackground": "#ffffff21",
    "editorBracketMatch.background": BG2,
    "editorBracketMatch.border": "#E6A2C580",
    "editorCodeLens.foreground": FG,
    "editorCursor.foreground": BG3,
    "editorError.border": BG2,
    "editorError.foreground": "#A22929",
    // gutter
    "editorGutter.background": "#2D3A5266",
    "editorGutter.addedBackground": "#3C9F4A",
    "editorGutter.deletedBackground": "#A22929",
    "editorGutter.modifiedBackground": "#26506D",
    // editorGroup
    "editorGroup.background": "#A22929",
    "editorGroup.border": FG_TH5,
    "editorGroup.dropBackground": "#7496D299",
    // editorGroupHeader
    "editorGroupHeader.noTabsBackground": BG2,
    "editorGroupHeader.tabsBackground": BG2,
    "editorGroupHeader.tabsBorder": BG,
    // editorHoverWidget
    "editorHoverWidget.background": BG,
    "editorHoverWidget.border": BG2,
    "editorIndentGuide.background": "#57709E",
    "editorLineNumber.foreground": "#aaa",
    "editorLink.activeForeground": FG,
    // editorMarkerNavigation
    "editorMarkerNavigation.background": "#57709E33",
    "editorMarkerNavigationError.background": "#A22929",
    "editorMarkerNavigationWarning.background": BG3,
    // ruler
    "editorOverviewRuler.border": BG2,
    "editorOverviewRuler.commonContentForeground": "#E6A2C555",
    "editorOverviewRuler.currentContentForeground": "#ee3a4355",
    "editorOverviewRuler.incomingContentForeground": "#7496D255",
    "editorRuler.foreground": "#3C4475",
    // editorSuggestWidget
    "editorSuggestWidget.background": BG,
    "editorSuggestWidget.border": BG,
    "editorSuggestWidget.foreground": FG,
    "editorSuggestWidget.highlightForeground": BG3,
    "editorSuggestWidget.selectedBackground": BG2,
    // editorWarning
    "editorWarning.border": "#ffffff00",
    "editorWarning.foreground": BG3,
    "editorWhitespace.foreground": "#ffffff1a",
    "editorWidget.background": BG,
    "editorWidget.border": BG2,
    "errorForeground": "#A22929",
    // extensionButton
    "extensionButton.prominentBackground": INFO_BG,
    "extensionButton.prominentForeground": "#fff",
    "extensionButton.prominentHoverBackground": FG_TH1,
    "focusBorder": BG2,
    "foreground": FG,
    // input
    "input.background": BG2,
    "input.border": BG2,
    "input.foreground": BG3,
    "input.placeholderForeground": FG,
    "inputOption.activeBorder": "#457A96",
    "inputValidation.errorBackground": BG2,
    "inputValidation.errorBorder": BG3,
    "inputValidation.infoBackground": BG2,
    "inputValidation.infoBorder": BG2,
    "inputValidation.warningBackground": BG2,
    "inputValidation.warningBorder": BG3,
    // list
    "list.activeSelectionBackground": BG2,
    "list.activeSelectionForeground": "#ece3e3",
    "list.dropBackground": BG2,
    "list.focusBackground": BG2,
    "list.focusForeground": FG,
    "list.highlightForeground": BG3,
    "list.hoverBackground": BG2,
    "list.hoverForeground": "#ece3e3",
    "list.inactiveSelectionBackground": BG2,
    "list.inactiveSelectionForeground": "#aaa",
    // menu
    "menu.background": "#546e9b",
    // merge
    "merge.border": "#ffffff00",
    "merge.commonContentBackground": "#c97d0c",
    "merge.commonHeaderBackground": "#c97d0c",
    "merge.currentContentBackground": "#2F7366",
    "merge.currentHeaderBackground": "#2F7366",
    "merge.incomingContentBackground": "#185294",
    "merge.incomingHeaderBackground": "#185294",
    // notification colors - The colors below only apply for VS Code versions 1.21 and higher.
    "notificationCenter.border": BG3,
    "notificationCenterHeader.foreground": FG,
    "notificationCenterHeader.background": BG2,
    "notificationToast.border": BG3,
    "notifications.foreground": FG,
    "notifications.background": BG2,
    "notifications.border": BG3,
    "notificationLink.foreground": BG3,
    // notification - If you target VS Code versions before the 1.21 (February 2018) release, these are the old (no longer supported) colors:
    "notification.background": BG3,
    "notification.buttonBackground": INFO_BG,
    "notification.buttonForeground": "#fff",
    "notification.buttonHoverBackground": FG_TH1,
    "notification.errorBackground": "#A22929",
    "notification.errorForeground": "#fff",
    "notification.foreground": "#000",
    "notification.infoBackground": INFO_BG,
    "notification.infoForeground": "#fff",
    "notification.warningBackground": FG_TH1,
    "notification.warningForeground": "#000",
    // panel
    "panel.background": BG2,
    "panel.border": BG3,
    "panelTitle.activeBorder": BG3,
    "panelTitle.activeForeground": BG3,
    "panelTitle.inactiveForeground": FG,
    // "peekView
    "peekView.border": BG3,
    "peekViewEditor.background": BG2,
    "peekViewEditor.matchHighlightBackground": "#2D3A5200",
    "peekViewEditorGutter.background": "#34435E",
    "peekViewResult.background": BG,
    "peekViewResult.fileForeground": FG,
    "peekViewResult.lineForeground": "#fff",
    "peekViewResult.matchHighlightBackground": BG2,
    "peekViewResult.selectionBackground": BG2,
    "peekViewResult.selectionForeground": "#fff",
    "peekViewTitle.background": BG,
    "peekViewTitleDescription.foreground": FG,
    "peekViewTitleLabel.foreground": BG3,
    // picker
    "pickerGroup.border": BG2,
    "pickerGroup.foreground": FG,
    // progressBar
    "progressBar.background": BG3,
    // scrollbar
    "scrollbar.shadow": "#00000000",
    "scrollbarSlider.activeBackground": "#D8A49Bcc",
    "scrollbarSlider.background": "#57709E80",
    "scrollbarSlider.hoverBackground": "#57709Ecc",
    // selection
    "selection.background": BG2,
    // sidebar
    "sideBar.background": BG,
    "sideBar.border": BG2,
    "sideBar.foreground": FG,
    "sideBarSectionHeader.background": BG2,
    "sideBarSectionHeader.foreground": FG,
    "sideBarTitle.foreground": FG,
    // statusBar
    "statusBar.background": BG,
    "statusBar.border": BG2,
    "statusBar.debuggingBackground": BG,
    "statusBar.debuggingBorder": BG3,
    "statusBar.debuggingForeground": BG3,
    "statusBar.foreground": FG,
    "statusBar.noFolderBackground": BG,
    "statusBar.noFolderBorder": BG2,
    "statusBar.noFolderForeground": FG,
    "statusBarItem.activeBackground": INFO_BG,
    "statusBarItem.hoverBackground": BG2,
    "statusBarItem.prominentBackground": BG,
    "statusBarItem.prominentHoverBackground": BG2,
    // tab
    "tab.activeBackground": "#34435E",
    "tab.activeForeground": "#fff",
    "tab.border": BG,
    "tab.activeBorder": BG3,
    "tab.inactiveBackground": BG,
    "tab.inactiveForeground": FG,
    "tab.unfocusedActiveForeground": FG,
    "tab.unfocusedInactiveForeground": FG,
    // --- workbench: terminal
    "terminal.ansiBlack": "#000000",
    "terminal.ansiRed": "#ff628c",
    "terminal.ansiGreen": FG_TH5,
    "terminal.ansiYellow": BG3,
    "terminal.ansiBlue": INFO_BG,
    "terminal.ansiMagenta": FG_TH3,
    "terminal.ansiCyan": "#80fcff",
    "terminal.ansiWhite": "#ffffff",
    "terminal.ansiBrightBlack": BG,
    "terminal.ansiBrightRed": "#ff628c",
    "terminal.ansiBrightGreen": FG_TH5,
    "terminal.ansiBrightYellow": BG3,
    "terminal.ansiBrightBlue": INFO_BG,
    "terminal.ansiBrightMagenta": FG_TH3,
    "terminal.ansiBrightCyan": "#80fcff",
    "terminal.ansiBrightWhite": BG2,
    "terminal.background": "#34435E",
    "terminal.foreground": "#f1e6e4",
    "terminalCursor.background": BG3,
    "terminalCursor.foreground": BG3,
    // Git status colors in File Explorer
    "gitDecoration.modifiedResourceForeground": BG3,
    "gitDecoration.deletedResourceForeground": "#ff628c",
    "gitDecoration.untrackedResourceForeground": FG_TH5,
    "gitDecoration.ignoredResourceForeground": "#808080",
    "gitDecoration.conflictingResourceForeground": "#FF7200",
    // textBlockQuote
    "textBlockQuote.background": BG2,
    "textBlockQuote.border": INFO_BG,
    "textCodeBlock.background": BG2,
    "textLink.activeForeground": INFO_BG,
    "textLink.foreground": INFO_BG,
    "textPreformat.foreground": BG3,
    "textSeparator.foreground": BG2,
    "titleBar.activeBackground": BG,
    "titleBar.activeForeground": "#ffffff",
    "titleBar.inactiveBackground": BG2,
    "titleBar.inactiveForeground": "#ffffff33",
    "walkThrough.embeddedEditorBackground": BG2,
    "welcomePage.buttonBackground": BG2,
    "welcomePage.buttonHoverBackground": BG2,
    "widget.shadow": "#00000026"
  },
  "tokenColors": [
    {
      "name": "Comment",
      "scope": ["comment", "punctuation.definition.comment"],
      "settings": {
        "fontStyle": "italic",
        "foreground": "#9CD9BF"
      }
    },
    {
      "name": "Constant",
      "scope": "constant",
      "settings": {
        "foreground": "#dac291"
      }
    },
    {
      "name": "Entity",
      "scope": "entity",
      "settings": {
        "foreground": BG3
      }
    },
    {
      "name": "Invalid",
      "scope": "invalid",
      "settings": {
        "foreground": "#f44542"
      }
    },
    {
      "name": "Storage Type Function",
      "scope": "storage.type.function",
      "settings": {
        "foreground": FG_TH1
      }
    },
    {
      "name": "Keyword",
      "scope": "keyword, storage.type.class",
      "settings": {
        "foreground": FG_TH1
      }
    },
    {
      "name": "Meta",
      "scope": "meta",
      "settings": {
        "foreground": FG_TH2
      }
    },
    {
      "name": "Meta JSX",
      "scope": [
        "meta.jsx.children",
        "meta.jsx.children.js",
        "meta.jsx.children.tsx"
      ],
      "settings": {
        "foreground": "#fff"
      }
    },
    { "name": "HTML tag",
      "scope": "entity.name.tag.js",
      "settings": {
        "foreground": FG_TH2,
      }
    },
    {
      "name": "JSX tag",
      "scope": "support.class.component.js",
      "settings": {
        "foreground": FG_TH3,
      }
    },
    {
      "name": "Meta Brace",
      "scope": "meta.brace",
      "settings": {
        "foreground": "#e1efff"
      }
    },
    {
      "name": "Punctuation",
      "scope": "punctuation",
      "settings": {
        "foreground": "#e1efff"
      }
    },
    {
      "name": "Punctuation Parameters",
      "scope": "punctuation.definition.parameters",
      "settings": {
        "foreground": FG_TH6
      }
    },
    {
      "name": "Punctuation Template Expression",
      "scope": "punctuation.definition.template-expression",
      "settings": {
        "foreground": FG_TH6
      }
    },
    {
      "name": "Storage",
      "scope": "storage",
      "settings": {
        "foreground": BG3
      }
    },
    {
      "name": "Storage Type Arrow Function",
      "scope": "storage.type.function.arrow",
      "settings": {
        "foreground": BG3
      }
    },
    {
      "name": "Storage Type Const",
      "scope": [
        "storage.type.js",
        "storage.modifier.js",
        "storage.modifier.ts",
        "storage.modifier.tsx",
      ],
      "settings": {
        "foreground": FG_TH1
      }
    },
    {
      "name": "String",
      "scope": ["string", "punctuation.definition.string"],
      "settings": {
        "foreground": "#7396D1"
      }
    },
    {
      "name": "String Template",
      "scope": ["string.template", "punctuation.definition.string.template"],
      "settings": {
        "foreground": FG_TH5
      }
    },
    {
      "name": "Support",
      "scope": "support",
      "settings": {
        "foreground": FG_TH2
      }
    },
    {
      "name": "Support Function",
      "scope": "support.function",
      "settings": {
        "foreground": FG_TH1
      }
    },
    {
      "name": "Support Variable Property DOM",
      "scope": "support.variable.property.dom",
      "settings": {
        "foreground": "#e1efff"
      }
    },
    {
      "name": "Variable",
      "scope": "variable",
      "settings": {
        "foreground": "#e1efff"
      }
    },
    {
      "name": "[CSS] - Entity",
      "scope": ["source.css entity", "source.stylus entity"],
      "settings": {
        "foreground": FG_TH1
      }
    },
    {
      "name": "[CSS] - prop name",
      "scope": ["support.type.property-name.css"],
      "settings": {
        "foreground": FG_TH2
      }
    },
    {
      "name": "[CSS] - prop value",
      "scope": ["support.constant.property-value.css"],
      "settings": {
        "foreground": FG_TH4
      }
    },
    {
      "name": "[CSS] - units",
      "scope": ["keyword.other.unit.rem.css", "constant.numeric.css"],
      "settings": {
        "foreground": FG_TH4
      }
    },
    {
      "name": "[CSS] - important",
      "scope": ["keyword.other.important"],
      "settings": {
        "foreground": FG_TH6
      }
    },
    {
      "name": "[CSS] - ID Selector",
      "scope": "entity.other.attribute-name.id.css",
      "settings": {
        "foreground": "#FFB454"
      }
    },
    {
      "name": "[CSS] - Element Selector",
      "scope": "entity.name.tag",
      "settings": {
        "foreground": FG_TH1
      }
    },
    {
      "name": "[SCSS] - selector",
      "scope": ["support.function.misc.scss"],
      "settings": {
        "foreground": FG_TH1
      }
    },
    {
      "name": "[CSS] - Support",
      "scope": ["source.css support", "source.stylus support"],
      "settings": {
        "foreground": "#7396D1"
      }
    },
    {
      "name": "[CSS] - Constant",
      "scope": [
        "source.css constant",
        "source.css support.constant",
        "source.stylus constant",
        "source.stylus support.constant"
      ],
      "settings": {
        "foreground": FG_TH6
      }
    },
    {
      "name": "[CSS] - String",
      "scope": [
        "source.css string",
        "source.css punctuation.definition.string",
        "source.stylus string",
        "source.stylus punctuation.definition.string"
      ],
      "settings": {
        "foreground": FG_TH6
      }
    },
    {
      "name": "[CSS] - Variable",
      "scope": ["source.css variable", "source.stylus variable"],
      "settings": {
        "foreground": FG_TH2
      }
    },
    {
      "name": "[HTML] - Entity Name",
      "scope": "text.html.basic entity.name",
      "settings": {
        "foreground": FG_TH2
      }
    },
    {
      "name": "[HTML] - ID value",
      "scope": "meta.toc-list.id.html",
      "settings": {
        "foreground": "#7396D1"
      }
    },
    {
      "name": "[HTML] - Entity Other",
      "scope": "text.html.basic entity.other",
      "settings": {
        "fontStyle": "italic",
        "foreground": BG3
      }
    },
    {
      "name": "[HTML] - Script Tag",
      "scope": "meta.tag.metadata.script.html entity.name.tag.html",
      "settings": {
        "foreground": BG3
      }
    },
    {
      "name":
        "[HTML] - Quotes. these are a slightly different colour because expand selection will then not include quotes",
      "scope":
        "punctuation.definition.string.begin, punctuation.definition.string.end",
      "settings": {
        "foreground": "#7A9DDE"
      }
    },
    {
      "name": "[INI] - Entity",
      "scope": "source.ini entity",
      "settings": {
        "foreground": "#e1efff"
      }
    },
    {
      "name": "[INI] - Keyword",
      "scope": "source.ini keyword",
      "settings": {
        "foreground": BG3
      }
    },
    {
      "name": "[INI] - Punctuation Definition",
      "scope": "source.ini punctuation.definition",
      "settings": {
        "foreground": FG_TH6
      }
    },
    {
      "name": "[INI] - Punctuation Separator",
      "scope": "source.ini punctuation.separator",
      "settings": {
        "foreground": FG_TH1
      }
    },
    {
      "name": "[JAVASCRIPT] - Storage Type Function",
      "scope": "source.js storage.type.function",
      "settings": {
        "foreground": FG_TH3
      }
    },
    {
      "name": "[JAVASCRIPT] - Variable Language",
      "scope": "variable.language, entity.name.type.class.js",
      "settings": {
        "foreground": FG_TH3
      }
    },
    {
      "name": "[JAVASCRIPT] - Inherited Component",
      "scope": "entity.other.inherited-class.js",
      "settings": {
        "foreground": "#ccc"
      }
    },
    {
      "name": "[PYTHON] - Self Argument",
      "scope": "variable.parameter.function.language.special.self.python",
      "settings": {
        "foreground": FG_TH3
      }
    },
    {
      "name": "[JSON] - Support",
      "scope": "source.json support",
      "settings": {
        "foreground": BG3
      }
    },
    {
      "name": "[JSON] - String",
      "scope": [
        "source.json string",
        "source.json punctuation.definition.string"
      ],
      "settings": {
        "foreground": "#e1efff"
      }
    },
    {
      "name": "[MARKDOWN] - Heading Punctuation",
      "scope": "punctuation.definition.heading.markdown",
      "settings": {
        "foreground": "#e1efff"
      }
    },
    {
      "name": "[MARKDOWN] - Heading Name Section",
      "scope": [
        "entity.name.section.markdown",
        "markup.heading.setext.1.markdown",
        "markup.heading.setext.2.markdown"
      ],
      "settings": {
        "foreground": BG3,
        "fontStyle": "bold"
      }
    },
    {
      "name": "[MARKDOWN] - Paragraph",
      "scope": "meta.paragraph.markdown",
      "settings": {
        "foreground": "#e1efff"
      }
    },
    {
      "name": "[MARKDOWN] - Quote Punctuation",
      "scope": "beginning.punctuation.definition.quote.markdown",
      "settings": {
        "foreground": BG3
      }
    },
    {
      "name": "[MARKDOWN] - Quote Paragraph",
      "scope": "markup.quote.markdown meta.paragraph.markdown",
      "settings": {
        "fontStyle": "italic",
        "foreground": FG_TH2
      }
    },
    {
      "name": "[MARKDOWN] - Separator",
      "scope": "meta.separator.markdown",
      "settings": {
        "foreground": BG3
      }
    },
    {
      "name": "[MARKDOWN] - Emphasis Bold",
      "scope": "markup.bold.markdown",
      "settings": {
        "fontStyle": "bold",
        "foreground": FG_TH2
      }
    },
    {
      "name": "[MARKDOWN] - Emphasis Italic",
      "scope": "markup.italic.markdown",
      "settings": {
        "fontStyle": "italic",
        "foreground": FG_TH2
      }
    },
    {
      "name": "[MARKDOWN] - Lists",
      "scope": "beginning.punctuation.definition.list.markdown",
      "settings": {
        "foreground": BG3
      }
    },
    {
      "name": "[MARKDOWN] - Link Title",
      "scope": "string.other.link.title.markdown",
      "settings": {
        "foreground": "#7396D1"
      }
    },
    {
      "name": "[MARKDOWN] - Link/Image Title",
      "scope": [
        "string.other.link.title.markdown",
        "string.other.link.description.markdown",
        "string.other.link.description.title.markdown"
      ],
      "settings": {
        "foreground": "#7396D1"
      }
    },
    {
      "name": "[MARKDOWN] - Link Address",
      "scope": [
        "markup.underline.link.markdown",
        "markup.underline.link.image.markdown"
      ],
      "settings": {
        "foreground": FG_TH2
      }
    },
    {
      "name": "[MARKDOWN] - Inline Code",
      "scope": ["fenced_code.block.language", "markup.inline.raw.markdown"],
      "settings": {
        "foreground": FG_TH2
      }
    },
    {
      "name": "[MARKDOWN] - Code Block",
      "scope": ["fenced_code.block.language", "markup.inline.raw.markdown"],
      "settings": {
        "foreground": FG_TH2
      }
    },
    {
      "name": "[PUG] - Entity Name",
      "scope": "text.jade entity.name",
      "settings": {
        "foreground": FG_TH2
      }
    },
    {
      "name": "[PUG] - Entity Attribute Name",
      "scope": "text.jade entity.other.attribute-name.tag",
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "name": "[PUG] - String Interpolated",
      "scope": "text.jade string.interpolated",
      "settings": {
        "foreground": FG_TH6
      }
    },
    {
      "name": "[TYPESCRIPT] - Entity Name Type",
      "scope": "source.ts entity.name.type",
      "settings": {
        "foreground": FG_TH4
      }
    },
    {
      "name": "[TYPESCRIPT] - Keyword",
      "scope": "source.ts keyword",
      "settings": {
        "foreground": BG3
      }
    },
    {
      "name": "[TYPESCRIPT] - Punctuation Parameters",
      "scope": "source.ts punctuation.definition.parameters",
      "settings": {
        "foreground": "#e1efff"
      }
    },
    {
      "name": "[TYPESCRIPT] - Punctuation Arrow Parameters",
      "scope": "meta.arrow.ts punctuation.definition.parameters",
      "settings": {
        "foreground": FG_TH6
      }
    },
    {
      "name": "[TYPESCRIPT] - Storage",
      "scope": "source.ts storage",
      "settings": {
        "foreground": FG_TH2
      }
    },
    {
      "name": "[TYPESCRIPT] - Variable Language",
      "scope": "variable.language, entity.name.type.class.ts, entity.name.type.class.tsx",
      "settings": {
        "foreground": FG_TH3
      }
    },
    {
      "name": "[TYPESCRIPT] - Inherited Component",
      "scope": "entity.other.inherited-class.ts, entity.other.inherited-class.tsx",
      "settings": {
        "foreground": "#ccc"
      }
    },
    {
      "name": "[PHP] - Entity",
      "scope": "source.php entity",
      "settings": {
        "foreground": FG_TH2
      }
    },
    {
      "name": "[PHP] - Variables",
      "scope": "variable.other.php",
      "settings": {
        "foreground": BG3
      }
    },
    {
      "name": "[C#] - Annotations",
      "scope": "storage.type.cs",
      "settings": {
        "foreground": FG_TH2
      }
    },
    {
      "name": "[C#] - Properties",
      "scope": "entity.name.variable.property.cs",
      "settings": {
        "foreground": FG_TH2
      }
    },
    {
      "name": "[C#] - Storage modifiers",
      "scope": "storage.modifier.cs",
      "settings": {
        "foreground": FG_TH4
      }
    },
    {
      "name": "Italicsify for Operator Mono",
      "scope": [
        "modifier",
        "this",
        "comment",
        "storage.modifier.js",
        "storage.modifier.ts",
        "storage.modifier.tsx",
        "entity.other.attribute-name.js",
        "entity.other.attribute-name.ts",
        "entity.other.attribute-name.tsx",
        "entity.other.attribute-name.html"
      ],
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "name": "[CSHARP] - Modifiers and keyword types",
      "scope": "storage.modifier.cs, keyword.type.cs",
      "settings": {
        "foreground": FG_TH3
      }
    },
    {
      "name": "[CSHARP] - Storage types",
      "scope": "storage.type.cs",
      "settings": {
        "foreground": FG_TH4
      }
    },
    {
      "name": "[CSHARP] - Namespaces, parameters, field variables, properties",
      "scope": "entity.name.type.namespace.cs, entity.name.variable.parameter.cs, entity.name.variable.field.cs, entity.name.variable.property.cs",
      "settings": {
        "foreground": "#e1efff"
      }
    }
  ]
}

module.exports = theme;
