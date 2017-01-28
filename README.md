# Filterable Notes

Simple app for viewing Google Sheets data.

## Background

One of my hobbies is learning foreign languages. I've often found myself looking up the same vocabulary and grammar points over and over again. At first I started to write notes  in a physical notebook, but obviously this was not ideal to use as a reference. I then started putting notes into a Google Sheet. This became a convenient way to quickly look up words and phrases that I already learned but had forgotten.  

This app improves upon that experience by allowing the user to filter/search the entered data so that relevant entries can be viewed together. It was intended to be a self study tool/reference for language learning (my personal spreadsheet contains vocab, phrases, idioms, grammar, etc.), but can be generalized for other purposes as well.

## Live Demo / How to Use

A live demo of the app can be found here:
https://martincli.github.io/filterable-notes/?id=1f3CA0rFt5sriJyloTuUQiqaBIscXTeWKFfY_09hE7YU
This demo uses the following example spreadsheet: https://docs.google.com/spreadsheets/d/1f3CA0rFt5sriJyloTuUQiqaBIscXTeWKFfY_09hE7YU/

### Using your own spreadsheet
1. Create a Google Sheet
2. Publish the sheet (File -> Publish to the web...)
3. Copy the ID of the sheet from the URL
4. Go to `https://martincli.github.io/filterable-notes/?id={SHEET_ID}`

### Notes
* The first row of the sheet will be used as headers for the table
* By default, entries are sorted by the values in the first column (this will work if they are numbers or words, but not both mixed together)
* Entries can be sorted by a different column by clicking on the column header