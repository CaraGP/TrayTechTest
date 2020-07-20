# General Notes and To-Do List

# General Notes

Currently everything requested by the task documentation has been fullfilled. I could have extended the suite to cover fails and edgecases, but I wasn't sure it would be needed necessarily as they were things not covered by the task scope itself - hopefully covering them with just a mention would be enough to show that I have at least covered these aspects with my general thought process, even if I haven't taken any futher steps to implement them.

Just a few more bits of tidying up needed before I would say this task is complete and the project can be submitted for review. Hopefully will list everything in the following To-Do section and removed when done.

This test suite so far only covers the "vanilla" Happy Path and really should be extended to cover overall functionality pertaining to the documented user journey and not just the user journey itself.

## Site Tidbits

Thought i'd mention any thoughts picked up through the creation of this project and exploring the test site.

- Only found 1 data-test attribute; it would be better to have more of these implemented to help mitigate any class/element name changes over time.
- There is a different between the Products and the Shopping Cart price bar where the latter doesn't display/have the Currency symbol. Would be good to have had consistency here.
- Some of the Product names and discriptions are interesting; assuming the random call-like functions are for other test tasks.
- Your Cart page, ideally would have a message displayed encouraging the user to add stuff to their cart, if they have navigated to this page before actually adding any products. Seems weird to display the headings/labels of the cart list, if in essence the list doesn't really exist yet. Could be currently interpreted by the user as being broken, if they've somehow forgotten that they haven't actually added anything yet.
- As it seems like the colour scheme is prodominently red and has no green, this point is probably just my own musing/opinion, but having the Checkout button on the Shopping cart page always being red and active regardless of the cart list state, seems a little odd to me. I think it would be better to have the Checkout button only activate if the user has items in the list and are actually ready to checkout. This would probably have been a question asked during planning/upon seeing the designs for the first time, etc.

# To-Do

_Not in priority order_

- Change reporters. Hoping to find better reporters that work with wdio6; if not, these ones will have to do, but I'm not exactly a fan and the multiple-cucumber-html-reporter doesn't fully work with 6 yet, i.e. can't seem to add screenshots to the report.
- Clear screenshot commands from individual steps.
- Clean up any dependances. Remove Mocha. Sort out what should be a dependancy and remain dev dependancies.
- Add docker compose so that the project runs in a container and users won't have to worry about needing particular versions of anything on their local machines.
- Update if statements to expects for assertions.
- Update wdio config to implement other browsers so that the tests can run against them, rather than just run against chrome.
- Add obvious fail and edgecases for particular scenarios covered, plus any extras which would be nice to have in order to help with full confidence all functionality covered by the E2E user journey has been covered and fully tested.

# Known Issues

## Suite sometimes Fails to run (Major)

When finishing up the implementation of the tests required to cover the requested E2E user journey, the suite started to frequently break. I wasn't able to work out the cause at the time, and initially it seemed that just changing the default waitforTimeout from 10secs to 30secs "fixed" the issue; but that however has proven not to be the case.

---

> Execution of 5 spec files started at 2020-07-20T13:51:43.020Z

> Starting ChromeDriver 83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}) on port 9515
> Only local connections are allowed.
> Please see https://chromedriver.chromium.org/security-considerations for suggestions on keeping ChromeDriver safe.
> ChromeDriver was started successfully.
>
> [0-0] RUNNING in chrome - /src/features/authentication.feature
>
> [0-2] RUNNING in chrome - /src/features/checkout.feature
>
> [0-1] RUNNING in chrome - /src/features/basket.feature
>
> [1595253106.099][warning]: This version of ChromeDriver has not been tested with Chrome version 84.
> [1595253106.159][warning]: This version of ChromeDriver has not been tested with Chrome version 84.
> [1595253106.169][warning]: This version of ChromeDriver has not been tested with Chrome version 84.
>
> [0-1] 2020-07-20T13:51:52.526Z ERROR @wdio/sync: RequestError: connect ECONNREFUSED 127.0.0.1:9515
> at ClientRequest.<anonymous> (/Users/cara/Documents/Projects/TrayTechTest/node_modules/got/dist/source/core/index.js:889:25)
> at ClientRequest.origin.emit (/Users/cara/Documents/Projects/TrayTechTest/node_modules/@szmarczak/http-timer/dist/source/index.js:39:20)
> at Socket.socketErrorListener (\_http_client.js:426:9)
> at emitErrorNT (internal/streams/destroy.js:92:8)
> at emitErrorAndCloseNT (internal/streams/destroy.js:60:3)
> at processTicksAndRejections (internal/process/task_queues.js:84:21)
> at TCPConnectWrap.afterConnect [as oncomplete](net.js:1137:16)
> at Object.afterStep (/Users/cara/Documents/Projects/TrayTechTest/wdio.conf.js:272:15)
>
> [0-1] Error in "AfterStep Hook"
> connect ECONNREFUSED 127.0.0.1:9515

---

## Suite doesn't display pending step snippets (Minor)

Doesn't look like the cucumberOpts in the wdio config is being fully respected. I've tried to get them to display but maybe its a wdio6 incompatitbility issue currently. Will try to find other reporters/addons to hopefully help with this issue.

## Suite doesn't fail when there are pending steps (Minor)

Again, this looks like a disrespected cucumberOpts issue. I've tried to set it to fail the suite if any of it is incomplete, but it's still deciding it wants to pass the suite evening with pending steps. It could also be that i've missed overriding the config that controls this feature.
