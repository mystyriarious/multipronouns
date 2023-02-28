# Multipronouns
A macro that allows you to give the main character (MC) multiple sets of pronouns.

* Supports multiple pronouns, up to however much JavaScript and SugarCube will support (a lot)
* ... Supports even just one pronoun!
* Pronouns can be completely customizable and have plurality
* Recognizes when to use singular vs. plural
* Can temporarily consistently use one pronoun, useful when a character is talking about the MC in one breath

# Installation

For Twine 2, copy and paste the code of `multipronouns.js` into your JavaScript. For Tweego, add that file to your source folder.

Use the variables in `multivar.txt` and put into your StoryInit passage.

# Demo
Go to (link) to be able to try the demo! You can download the project iself under Downloads to be able to see how it's used.

# Example

```<<gender "they" "them" "their" "theirs" "themself" true>>
<<gender "she" "her" "her" "hers" "herself" false>>

?mcThey $mc_is walking.
?mcTheyre walking.
?mcThey walk$mc_s.
I see ?mcthem walking.
That is ?mctheir dog.
?mcThey $mc_has a dog.
It is ?mctheirs.
?mcThemself.
```

# `<<gender>>`
Syntax: `<<gender they them their theirs themself plural>>
This macro will create one set of pronouns, and accept only 6 aguments in this order to function properly.

Arguments:
* `they` : string. The subjective, like she/he/they.
* `them` : string. The objective, like her/him/them.
* `their` : string. The determiner, like her/his/their.
* `theirs` : string. The possessive, like hers/his/theirs.
* `themself` : string. The reflexive, like herself/himself/themself.
* `plural` : boolean, can only be true or false. True for plural, false for singular.

```<<gender "they" "them" "their" "theirs" "themself" true>>
<<gender "xe" "xem" "xyr" "xyrs" "xemself" false>>
```
