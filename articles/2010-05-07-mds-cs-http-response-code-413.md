--- 
title: MDS-CS HTTP Response Code 413
date:  07/05/2010
tag:   BlackBerry

Problem
=======
When using the BlackBerry simulator (in my case JDE 4.6.1) and MDS-CS to make a network request, you receive `HTTP 413 "Request entity too large"`. However, using `wget` or `curl` returns a HTTP 200 response.

Reason
======
The reason is that the MDS-CS tool limits the bandwidth. If the server response is too large, the MDS-CS tool will replace the response with it's own HTTP 413 response.

Solution
========
There is a configuration file that allows you to increase the maximum bandwidth.

`<eclipse_dir>\plugins\net.rim.ejde.componentpack4.6.1_4.6.1.36\components\MDS\config\rimpublic.property`

    [IPPP]
    IPPP.connection.MaxNumberOfKBytesToSend=1024