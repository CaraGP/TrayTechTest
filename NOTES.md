# General Notes and To-Do List

# General Notes

Currently everything requested by the task documentation has been fullfilled (or so I believe/have interpretted it). I could have extended the suite to cover fails and edgecases, but I wasn't sure it would be needed necessarily as they were things not covered by the task scope itself - hopefully covering them with just a mention here would be enough to show that I have at least covered these aspects with my general thought process, even if I haven't taken any immediate steps to implement them.

I have included a To Do list here, which cover any extras I would have liked/should look into more, to hopefully help with what I mentioned above.

This test suite so far only covers the "vanilla" Happy Path and really should be extended to cover overall functionality pertaining to the documented user journey and not just the user journey itself.

## Site Tidbits

Thought i'd mention any thoughts picked up through the creation of this project and exploring the test site.

- Only found 2 data-test attributes (username & password); it would be better to have more of these implemented to help mitigate any class/element name changes over time.
- There is a different between the Products and the Shopping Cart price bar where the latter doesn't display/have the Currency symbol. Would be good to have had consistency here.
- Some of the Product names and discriptions are interesting; assuming the random call-like functions are for other test tasks.
- The Cart page, ideally would have a message displayed encouraging the user to add stuff to their cart, if they have navigated to this page before actually adding any products. Seems weird to display the headings/labels of the cart list, if in essence the list doesn't really exist yet. Could be currently interpreted by the user as being broken, if they've somehow forgotten that they haven't actually added anything yet.
- As it seems like the colour scheme is prodominently red and has no green, this point is probably just my own musing/opinion, but having the Checkout button on the Shopping cart page always being red and active regardless of the cart list state, seems a little odd to me. I think it would be better to have the Checkout button only activate if the user has items in the list and are actually ready to checkout. This would probably have been a question asked during planning/upon seeing the designs for the first time, etc.

# To-Do

_Not in priority order_

- Clean up any dependances.
- Add docker compose so that the project runs in a container and users won't have to worry about needing particular versions of anything on their local machines.
- Get wdio expect to work. Couldn't seem to get it to behave correctly before; created my own assertion helper instead.
- Update wdio config to implement other browsers so that the tests can run against them, rather than just run against chrome. Could add something like browserstack; if it works with wdio6.
- Add obvious fail and edgecases for the particular scenarios covered, plus any extras which would be nice to have in order to help with confidence in the suite and expected behaviours.
- Pull out the username and password details and possibily add them as SSM variables which are stored somewhere like AWS, for extra protection. It would not be wise to keep private/sensitive details directly in the project.

# Known Issues

## Suite tends to fail when loading up, if max instances is set to more than 1 (Major)

When finishing up the implementation of the tests required to cover the requested E2E user journey, the suite started to frequently break. I wasn't able to work out the cause at the time, and initially it seemed that just changing the default waitforTimeout from 10secs to 30secs "fixed" the issue; but that however has proven not to be the case. I feared trying to delve into the issue would lead to a dark rabbit hole, so chose to continue with clean up/fixing more minor/scenario issues.

Having changed the max instances to 1 seems to have mitigated this issue for now. It also only affected the full suite run. Individual test runs seem unaffected.

_Copy of error I received when the suite failed, for reference:_

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

Not sure exactly why not, probably a config issue and i'm overlooking something(s).
