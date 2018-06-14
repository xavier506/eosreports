/***********************************************
 *        Animation Settings
 ***********************************************/
function animate (options) { /* eslint-disable-line no-unused-vars */
  var animationName = 'animated ' + options.name
  var animationEnd =
    'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
  $(options.selector)
    .addClass(animationName)
    .one(animationEnd, function () {
      $(this).removeClass(animationName)
    })
}
