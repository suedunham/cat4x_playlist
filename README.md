# CaT4X Playlist Viewer

This is a partial fork of
[CaTRoX (QWR Edition)](https://github.com/TheQwertiest/CaTRoX_QWR). The playlist
viewer and scripts common to the theme as a whole have been extracted and set up
for standalone use in your own [foobar2000](https://www.foobar2000.org/) theme.

This was developed in Linux in light of
[Zeinok's gist](https://gist.github.com/Zeinok/ceaf6ff204792dde0ae31e0199d89398)
on setting [WINE](https://www.winehq.org/) up for dark mode. An alternate
registry script based on the Breeze Dark theme in
[KDE Plasma](https://kde.org/plasma-desktop/) versions 6.4 and higher has been
included.

The default property values reflect this. Of particular note is the primitive
scrollbar style. Hopefully this can be wrestled back into CaTRoX's initial
state by Windows users, but I have not tested that. I don't have much desire
for testing things there and only have access to Windows 10 anyway.

**Note:** I don't actually know JavaScript. The changes made were limited to
removing references to components I don't use, like `UIHacks`, and making panel
properties out of literal color and font values present in the code for easier
customization. By all means, make issues for any problems found, but please
don't expect prompt, competent attention to them. Heck, I'm no great shakes at
git either.

## Requirements

* Some version of
  [Spider Monkey Panel](https://www.foobar2000.org/components/view/foo_spider_monkey_panel). 
  There are a few out there. I see that a script similar to this one comes
  with [this version](https://github.com/marc2k3/spider-monkey-panel-x64/blob/main/CHANGELOG.md#1726114).

  This playlist viewer was developed in the version 3.7.x branch of
  [JSplitter](https://foobar2000.club/forum/viewtopic.php?t=6378).
* (Optional) [Playback Statistics](https://www.foobar2000.org/components/view/foo_playcount).
  This component may be needed to use the play count and rating features.
* Fonts. One is not required to use the default fonts, of course, but they are
  listed here.
  * Noto Sans
  * Noto Sans Condensed
  * Noto Sans Condensed Semibold
  * Noto Sans Semibold
  * Noto Sans Symbols
  * Noto Sans Symbols 2

  That last is the best match I found for WINE's version of the old scrollbar
  arrow buttons, however that makes those.
  [Google has several here](https://fonts.google.com/noto/fonts). Linux users
  may find them in their distribution's repository, and using the Plasma
  desktop environment may install many if not all of them with it. The condensed
  and semibold ones may be in a separate package, such as in
  [Arch](https://archlinux.org/packages/extra/any/noto-fonts-extra/).

## Installation

These steps work in`JSplitter` v3.7.6.

1. Add a Spider Monkey Panel to your foobar2000 theme and click
   `Configure panel…` in the context menu. If that option doesn't show, hold
   down the `Shift` key while right clicking in the panel.
2. Select the `Package` option and open the `Package manager`.
3. Drag and drop the `.zip` files into the list of packages. This can be fussy.
   I've had success by adding the common scripts package
   (`{1583C4B7-53AD-403F-8F7E-CB20490AAA26}.zip`) first and then the playlist
   viewer package.

## Customization

To change the adjustable properties, go to the `Panel properties…` window from
the context menu, again possibly holding down the `Shift` key. The properties
under `user.theme` are most of the ones added here. I did waffle on renaming
new ones under `user.scrollbar` and decided to leave them together with others
there previously.

Some of the other, older properties—like under `user.header` and `user.row`— are
more nicely changed from the panel's context menu. The new properties have not
been made available from that menu, mostly because the prospect of editing
colors via twenty different color picker dialogs depressed me.

These properties do stick in the panel even if the `.zip` packages are removed
and drag-and-dropped anew. Pressing the `Clear` button will restore the default
values.

The defaults are assigned to the panel in the `common/scripts/Theme_Settings.js`
file. There are many other color settings buried in there as well that are part
of the data objects used in the original scripts. The panel properties allow
for distinct color values which are then reused in the other, wider, internal
properties. The latter can be made there into their own panel properties or
otherwise have different values plugged into them.

## Known issues

I suppose some of this may be due to the particular SMP flavor in use.

* This script does not play nicely with the
  [Columns UI](https://www.foobar2000.org/components/view/foo_ui_columns)
  search panel, or at least it didn't the last time I tried back in Windows 10
  in a 32-bit fb2k. That component updates a playlist viewer per user's
  keystroke, and I don't know how to deal with that.
* The panel will crash if the last playlist is removed in the playlist manager.
  Closing and reopening foobar2000 will make a new default playlist. I have
  successfully placed a `TODO` comment where the crash occurs, but the boolean
  logic around it eludes me.

## What's next

1. More literal values can be surfaced for editing the foobar2000 title
   formatting strings in the album headers, for instance.
2. Getting settings from the DUI ones sure seems handy, and the same could be
   said for CUI as well. Some could be gotten from the WINE registry, but then
   there's Windows to consider.
2. Don't expect this any time soon, but I have my eye on the hyperlinks in the
   [Georgia-ReBORN](https://github.com/TT-ReBORN/Georgia-ReBORN) theme. That
   playlist viewer is descended from CatRoX_QWR as well, though it is more
   advanced. I find myself wishing I could click the artist and open a new
   playlist of all their albums, but my grafting that onto this script would probably have visible bolts at the neck.
