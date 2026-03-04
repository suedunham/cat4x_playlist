'use strict'

include('Common.js');
include('Theme_Settings.js');
include('Control_List.js');

function on_paint(gr) {
    gr.DrawString(
        'This is a utility package. It does nothing by itself.',
        gdi.Font(g_properties.panel_message_font,
                 g_properties.panel_message_font_size),
        g_theme.colors.panel_text_normal, 0, 0, 0, 0);
}