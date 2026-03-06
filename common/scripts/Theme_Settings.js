include('Common.js');

// Common color properties
g_properties.add_properties(
    {
        theme_accent_color: ['user.theme.color.accent', '61, 174, 233'],
        theme_panel_back_color: ['user.theme.color.panel_background', '20, 22, 24'],
        theme_panel_front_color: ['user.theme.color.panel_foreground', '41, 44, 48'],
        theme_panel_line_color: ['user.theme.color.panel_line', '76, 78, 80'],
        theme_text_color: ['user.theme.color.text', '252, 252, 252'],
        theme_window_background_color: ['user.theme.color.window_background', '32, 35, 38'],
    }
);

// Playlist viewer color properties
g_properties.add_properties(
    {
        theme_playlist_mgr_text_normal: ['user.theme.color.playlist_mgr_text', '132, 141, 150'],
        theme_playlist_text_normal: ['user.theme.color.playlist_text', '161, 169, 177'],
        theme_playlist_row_background_alt: ['user.theme.color.playlist_row_background_alt', '29, 31, 34'],
        theme_playlist_row_artist_normal: ['user.theme.color.playlist_row_artist_normal', '120, 122, 124'],
        theme_playlist_row_selected: ['user.theme.color.playlist_row_selected', '22, 58, 76'],
        theme_playlist_row_queued: ['user.theme.color.playlist_row_queued', '252, 252, 252, 20'],
        theme_playlist_row_drop_position_boundary: ['user.theme.color.playlist_drop_position_boundary', '233, 118, 61'],

    }
);

// Internal data object.
let g_theme = {};
g_theme.name = 'CaT4X';
g_theme.version = '0.1.0';
g_theme.folder_name = 'CaT4X';

/** @type {Object<string, number>} */
g_theme.colors = {};

// General colors
g_theme.colors.pss_back = rgb_prop(g_properties.theme_panel_back_color);
g_theme.colors.panel_back = g_theme.colors.pss_back
g_theme.colors.panel_front = rgb_prop(g_properties.theme_panel_front_color);
g_theme.colors.panel_line = rgb_prop(g_properties.theme_panel_line_color);
g_theme.colors.panel_line_selected = rgb_prop(g_properties.theme_accent_color);
g_theme.colors.panel_text_normal = rgb_prop(g_properties.theme_text_color);

// Scrollbar colors
g_theme.colors.scroll_back = rgb_prop(g_properties.theme_window_background_color);
g_theme.colors.scroll_arrow = g_theme.colors.panel_text_normal;
g_theme.colors.scroll_line = g_theme.colors.panel_line;


// Playlist viewer colors
/** @type {Object<string, number>} */
var g_pl_colors = {};
//---> Common
g_pl_colors.background = g_theme.colors.panel_back;
//---> Playlist Manager
g_pl_colors.playlist_mgr_text_normal = rgb_prop(g_properties.theme_playlist_mgr_text_normal);
g_pl_colors.playlist_mgr_text_hovered = g_theme.colors.panel_text_normal;
g_pl_colors.playlist_mgr_text_pressed = g_pl_colors.playlist_mgr_text_normal;
//---> Header
g_pl_colors.group_title = rgb_prop(g_properties.theme_playlist_text_normal);
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
g_pl_colors.title_normal = g_pl_colors.group_title;
g_pl_colors.row_artist_selected = g_pl_colors.title_normal;
g_pl_colors.row_artist_playing = rgb_prop(g_properties.theme_accent_color);
g_pl_colors.row_artist_normal = rgb_prop(g_properties.theme_playlist_row_artist_normal);
g_pl_colors.count_normal = g_pl_colors.row_artist_normal;
g_pl_colors.count_selected = g_pl_colors.title_selected;
g_pl_colors.count_playing = g_pl_colors.title_playing;
g_pl_colors.row_selected = rgb_prop(g_properties.theme_playlist_row_selected);
g_pl_colors.row_alternate = rgb_prop(g_properties.theme_playlist_row_background_alt);
g_pl_colors.row_focus_selected = g_theme.colors.panel_line_selected;
g_pl_colors.row_focus_normal = g_theme.colors.panel_line;
g_pl_colors.row_queued = rgb_prop(g_properties.theme_playlist_row_queued);
g_pl_colors.row_drop_position = g_pl_colors.row_artist_normal;
g_pl_colors.row_drop_position_boundary = rgb_prop(g_properties.theme_playlist_row_drop_position_boundary);
//---> Misc
g_pl_colors.dummy_text = g_theme.colors.panel_line;


// Playlist viewer font properties
// Font sizes are in pixels.
g_properties.add_properties(
    {
        theme_playlist_mgr_font: ['user.theme.font.playlist_mgr', 'Noto Sans Semibold'],
        theme_playlist_mgr_font_size: ['user.theme.font.playlist_mgr_size', 12],
        theme_playlist_title_font: ['user.theme.font.playlist_title', 'Noto Sans Condensed'],
        theme_playlist_title_font_size: ['user.theme.font.playlist_title_size', 12],
        theme_playlist_title_play_sel_font: ['user.theme.font.playlist_title_play_sel', 'Noto Sans Condensed Semibold'],
        theme_playlist_artist_font: ['user.theme.font.playlist_artist', 'Noto Sans Semibold'],
        theme_playlist_artist_font_size: ['user.theme.font.playlist_artist_size', 17],
        theme_playlist_artist_compact_font: ['user.theme.font.playlist_artist_compact', 'Noto Sans Semibold'],
        theme_playlist_artist_compact_font_size: ['user.theme.font.playlist_artist_compact_size', 15],
        theme_playlist_playcount_font: ['user.theme.font.playlist_playcount', 'Noto Sans'],
        theme_playlist_playcount_font_size: ['user.theme.font.playlist_playcount_size', 9],
        theme_playlist_album_font: ['user.theme.font.playlist_album', 'Noto Sans Semibold'],
        theme_playlist_album_font_size: ['user.theme.font.playlist_album_size', 15],
        theme_playlist_date_font: ['user.theme.font.playlist_date', 'Noto Sans Semibold'],
        theme_playlist_date_font_size: ['user.theme.font.playlist_date_size', 16],
        theme_playlist_info_font: ['user.theme.font.playlist_info', 'Noto Sans'],
        theme_playlist_info_font_size: ['user.theme.font.playlist_info_size', 11],
        theme_playlist_cover_font: ['user.theme.font.playlist_cover', 'Noto Sans Semibold'],
        theme_playlist_cover_font_size: ['user.theme.font.playlist_cover_size', 11],
        theme_playlist_rating_not_set_font: ['user.theme.font.playlist_rating_not_set', 'Noto Sans Symbols'],
        theme_playlist_rating_not_set_font_size: ['user.theme.font.playlist_rating_not_set_size', 14],
        theme_playlist_rating_set_font: ['user.theme.font.playlist_rating_set', 'Noto Sans Symbols'],
        theme_playlist_rating_set_font_size: ['user.theme.font.playlist_rating_set_size', 16],
        theme_playlist_empty_font: ['user.theme.font.playlist_empty', 'Noto Sans'],
        theme_playlist_empty_font_size: ['user.theme.font.playlist_empty_size', 16],
    }
);

/** @type {Object<string, IGdiFont>} */
var g_pl_fonts = {
    playlist_mgr: gdi.Font(g_properties.theme_playlist_mgr_font,
                           g_properties.theme_playlist_mgr_font_size),
    title_normal: gdi.Font(g_properties.theme_playlist_title_font,
                           g_properties.theme_playlist_title_font_size),
    title_selected: gdi.Font(g_properties.theme_playlist_title_font_play_sel,
                             g_properties.theme_playlist_title_font_size),
    title_playing: gdi.Font(g_properties.theme_playlist_title_font_play_sel,
                            g_properties.theme_playlist_title_font_size),
    artist_normal: gdi.Font(g_properties.theme_playlist_artist_font,
                            g_properties.theme_playlist_artist_font_size),
    artist_playing: gdi.Font(g_properties.theme_playlist_artist_font,
                             g_properties.theme_playlist_artist_font_size,
                             g_font_style.underline),
    artist_normal_compact: gdi.Font(g_properties.theme_playlist_artist_compact_font,
                                    g_properties.theme_playlist_artist_compact_font_size),
    artist_playing_compact: gdi.Font(g_properties.theme_playlist_artist_compact_font,
                                     g_properties.theme_playlist_artist_compact_font_size,
                                     g_font_style.underline),
    playcount: gdi.Font(g_properties.theme_playlist_playcount_font,
                        g_properties.theme_playlist_playcount_font_size),
    album: gdi.Font(g_properties.theme_playlist_album_font,
                    g_properties.theme_playlist_album_font_size),
    date: gdi.Font(g_properties.theme_playlist_date_font,
                   g_properties.theme_playlist_date_font_size),
    date_compact: gdi.Font(g_properties.theme_playlist_date_font,
                           g_properties.theme_playlist_artist_compact_font_size),
    info: gdi.Font(g_properties.theme_playlist_info_font,
                   g_properties.theme_playlist_info_font_size),
    cover: gdi.Font(g_properties.theme_playlist_cover_font,
                    g_properties.theme_playlist_cover_font_size),
    rating_not_set: gdi.Font(g_properties.theme_playlist_rating_not_set_font,
                             g_properties.theme_playlist_rating_not_set_font_size),
    rating_set: gdi.Font(g_properties.theme_playlist_rating_set_font,
                         g_properties.theme_playlist_rating_set_font_size),
    empty_text: gdi.Font(g_properties.theme_playlist_empty_font,
                         g_properties.theme_playlist_empty_font_size),
};
