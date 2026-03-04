include('Common.js');

g_properties.add_properties(
    {
        theme_accent_color: ['user.theme.color.accent', '61, 174, 233'],
    }
);

// This existed in Common.js before colors were made into properties, and
// it may be superfluous now.
let g_theme = {};
g_theme.name = 'CaT4X';
g_theme.version = '0.1.0';
g_theme.folder_name = 'CaT4X';

g_theme.colors = {};
g_theme.colors.pss_back = _RGB(25, 28, 30);
g_theme.colors.panel_back = _RGB(25, 28, 30);
g_theme.colors.panel_front = _RGB(41, 44, 48);
g_theme.colors.panel_line = _RGB(49, 54, 59);
g_theme.colors.panel_line_selected = rgb_prop(g_properties.theme_accent_color);
g_theme.colors.panel_text_normal = _RGB(252, 252, 252);
g_theme.colors.scroll_back = _RGB(32, 35, 28);
g_theme.colors.scroll_arrow = _RGB(252, 252, 252);
g_theme.colors.scroll_line = _RGB(76, 78, 81);
