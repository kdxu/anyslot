# anyslot

A tiny script to make any `slot`(one-armed bandit) for hubot.

## Usage

```coffee
slot = require('anyslot')
module.exports = (robot) ->
  robot.hear /bbaslot/i, (msg) ->
    str = slot.go(':bba:', ':bba2:',':bba3:',':bba_political:',':apa:',':apa2:')
    msg.send (str)
```
then

```
hubot> bbaslot
hubot> :bba2: :bba3: :bba:
hubot> bbaslot
hubot> :apa2: :bba: :bba3:
hubot> bbaslot
hubot> :bba2: :bba: :bba2:
```
