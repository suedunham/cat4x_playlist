include('Common.js');

g_properties.add_properties(
    {
        theme_accent_color: ['user.theme.color.accent', '61, 174, 233'],
        theme_panel_back_color: ['user.theme.color.panel_background', '20, 22, 24'],
        theme_panel_front_color: ['user.theme.color.panel_foreground', '41, 44, 48'],
        theme_panel_line_color: ['user.theme.color.panel_line', '76, 78, 80'],
        theme_text_color: ['user.theme.color.text', '252, 252, 252'],
    }
);

// This existed in Common.js before colors were made into properties, and
// it may be superfluous now.
let g_theme = {};
g_theme.name = 'CaT4X';
g_theme.version = '0.1.0';
g_theme.folder_name = 'CaT4X';

/** @type {Object<string, number>} */
g_theme.colors = {};

// General colors
g_theme.colors.pss_back = rgb_prop(g_properties.theme_panel_back_color);
g_theme.colors.panel_back = rgb_prop(g_properties.theme_panel_back_color);
g_theme.colors.panel_front = rgb_prop(g_properties.theme_panel_front_color);
g_theme.colors.panel_line = rgb_prop(g_properties.theme_panel_line_color);
g_theme.colors.panel_line_selected = rgb_prop(g_properties.theme_accent_color);
g_theme.colors.panel_text_normal = rgb_prop(g_properties.theme_text_color);

// Scrollbar colors
g_theme.colors.scroll_back = _RGB(32, 35, 38);
g_theme.colors.scroll_arrow = rgb_prop(g_properties.theme_text_color);
g_theme.colors.scroll_line = _RGB(76, 78, 80);


// Playlist viewer colors
/** @type {Object<string, number>} */
var g_pl_colors = {};
//---> Common
g_pl_colors.background = g_theme.colors.panel_back;
//---> Playlist Manager
g_pl_colors.playlist_mgr_text_normal = _RGB(132, 141, 150);
g_pl_colors.playlist_mgr_text_hovered = g_theme.colors.panel_text_normal;
g_pl_colors.playlist_mgr_text_pressed = _RGB(109, 112, 114);
//---> Header
g_pl_colors.group_title = _RGB(187, 194, 200);
g_pl_colors.group_title_selected = g_theme.colors.panel_text_normal;
g_pl_colors.artist_normal = g_pl_colors.group_title;
g_pl_colors.artist_playing = g_pl_colors.artist_normal;
g_pl_colors.album_normal = g_pl_colors.group_title;
g_pl_colors.album_playing = g_pl_colors.album_normal;
g_pl_colors.info_normal = g_pl_colors.group_title;
g_pl_colors.info_playing = g_pl_colors.info_normal;
g_pl_colors.date_normal = g_pl_colors.group_title;
g_pl_colors.date_playing = g_pl_colors.date_normal;
g_pl_colors.line_normal = g_theme.colors.panel_line;
g_pl_colors.line_playing = g_pl_colors.line_normal;
g_pl_colors.line_selected = g_theme.colors.panel_line_selected;
//---> Row
g_pl_colors.title_selected = g_theme.colors.panel_text_normal;
g_pl_colors.title_playing = g_theme.colors.panel_line_selected;
g_pl_colors.title_normal = _RGB(161, 169, 177);
// g_pl_colors.title_normal = _RGB(169, 174, 180);
g_pl_colors.row_artist_selected = g_pl_colors.title_normal;
g_pl_colors.row_artist_playing = rgb_prop(g_properties.theme_accent_color);
g_pl_colors.row_artist_normal = g_pl_colors.playlist_mgr_text_pressed;
g_pl_colors.count_normal = _RGB(120, 122, 124);
g_pl_colors.count_selected = g_pl_colors.title_selected;
g_pl_colors.count_playing = g_pl_colors.title_playing;
g_pl_colors.row_selected = _RGB(22, 56, 76);
g_pl_colors.row_alternate = _RGB(34, 37, 40);
g_pl_colors.row_focus_selected = g_theme.colors.panel_line_selected;
g_pl_colors.row_focus_normal = _RGB(80, 80, 80);
g_pl_colors.row_queued = _RGBA(150, 150, 150, 0);
g_pl_colors.row_drop_position = _RGB(140, 142, 144);
g_pl_colors.row_drop_position_boundary = _RGB(233, 118, 61);
//---> Misc
g_pl_colors.dummy_text = _RGB(80, 80, 80);


/** @type {Object<string, IGdiFont>} */
var g_pl_fonts = {
    playlist_mgr:   gdi.Font('Noto Sans Semibold', 12),

    title_normal:   gdi.Font('Noto Sans Condensed', 12),
    title_selected: gdi.Font('Noto Sans Condensed Semibold', 12),
    title_playing:  gdi.Font('Noto Sans Condensed Semibold', 12),

    artist_normal:          gdi.Font('Noto Sans Semibold', 17),
    artist_playing:         gdi.Font('Noto Sans Semibold', 17, g_font_style.underline),
    artist_normal_compact:  gdi.Font('Noto Sans Semibold', 15),
    artist_playing_compact: gdi.Font('Noto Sans Semibold', 15, g_font_style.underline),

    playcount:      gdi.Font('Noto Sans', 9),
    album:          gdi.Font('Noto Sans Semibold', 15),
    date:           gdi.Font('Noto Sans Semibold', 16),
    date_compact:   gdi.Font('Noto Sans Semibold', 15),
    info:           gdi.Font('Noto Sans', 11),
    cover:          gdi.Font('Noto Sans Semibold', 11),
    rating_not_set: gdi.Font('Noto Sans Symbols', 14),
    rating_set:     gdi.Font('Noto Sans Symbols', 16),

    dummy_text: gdi.Font('Noto Sans', 16)
};
