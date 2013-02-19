--- 
title: S3 Content-Type with Transmit
date: 18/02/2013
tag: Amazon S3

# Problem

When using S3 to serve a static website, CSS files are returned with the
content-type of `binary/octet-stream`. Since the content-type is incorrect, the
webpage does not load the CSS file.

# Solution

I was using [Transmit][transmit-url] (4.3.2) to upload my files to S3. By default,
Transmit does not set the content-type for CSS files.

To add the correct content-type for specific files with Transmit:

  - Open `Preferences > Cloud`
  - Add Extension: __css__
    - Name: __content-type__
    - Value: __text/css__

Now re-upload your CSS files.

# Source

[Route19 Logbook][source-url]

  [transmit-url]: http://panic.com/transmit/
  [source-url]: http://logbook.route19.com/post/8827368890/amazon-s3-content-type-problems-with-transmit
