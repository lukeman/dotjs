var clearItems = $("<li><span class='dlt-close'><a href='#' onClick='$(\".download-item .dlt-close a\").click()'>Clear All Items</a></span></li>");
$("#dashboard ul").prepend(clearItems);
