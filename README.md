# Multipronouns
A macro that allows you to give the main character (MC) multiple sets of pronouns.

* Supports multiple pronouns, up to however much JavaScript and SugarCube will support (a lot)
* ... Supports even just one pronoun!
* Pronouns can be completely customizable and have plurality
* Recognizes when to use singular vs. plural
* Can temporarily consistently use one pronoun, useful when a character is talking about the MC in one breath

# Installation

For Twine 2, copy and paste the code of `multipronouns.js` into your JavaScript. There is the pretty version of it, and then there's a minified version of it to save on space.

Copy and paste `multivar.txt` and put into your StoryInit passage. These will initialize the variables needed for the JS code.

# Demo
Go to (link) to be able to try the demo! You can download the project iself under Downloads to be able to see how it's used.

# Example Usage

```<<gender "they" "them" "their" "theirs" "themself" true>>
<<gender "she" "her" "her" "hers" "herself" false>>

?mcThey $mc_is walking.
?mcThey $mc_was walking.
?mcTheyre walking.
?mcThey walk$mc_s.
I see ?mcthem walking.
That is ?mctheir dog.
?mcThey $mc_has a dog.
It is ?mctheirs.
?mcThemself.
```

# Overview
The ``<<gender>>`` macro is what's used to create a new set of pronouns for the MC. [Refer to the section on the gender macro below.](https://github.com/mystyriarious/multipronouns/blob/main/README.md#gender)

`?mcthey`, `?mcthem`, `?mctheir`, `?mctheirs`, `?mcthemself`, and `?mctheyre` will automatically randomly pick from the sets of pronouns that the player chooses that were added through the ``<<gender>>`` macro. [Refer to how how to use these below.]([https://github.com/mystyriarious/multipronouns/blob/main/README.md#gender](https://github.com/mystyriarious/multipronouns/blob/main/README.md#mcthey-mcthem-mctheir-mctheirs-mcthemself-mctheyre))

`$mc_they`, `$mc_them`, `$mc_their`, `$mc_theirs`, `$mc_themself` will display the same pronouns as the last `?mcthey`, `?mcthem`, etc. used. [See the section under Story Variables below.](https://github.com/mystyriarious/multipronouns/blob/main/README.md#mcthey-mcthem-mctheir-mctheirs-mcthemself-mctheyre)

There are also `$mc_is`, `$mc_s`, and `$mc_has` that function similarly, but they determine plurality of `?mcthey`, `?mcthem`, etc. and therefore refer to the same set of pronouns as `$mc_they`, `$mc_them`, etc.

# `<<gender>>`
Syntax: `<<gender they them their theirs themself plural>>`

This macro will create one set of pronouns, and accept only 6 aguments in this order to function properly.

Arguments:
* `they` : string. The subjective, like she/he/they.
* `them` : string. The objective, like her/him/them.
* `their` : string. The determiner, like her/his/their.
* `theirs` : string. The possessive, like hers/his/theirs.
* `themself` : string. The reflexive, like herself/himself/themself.
* `plural` : boolean, can only be true or false. True for plural, false for singular.

```
<<gender "they" "them" "their" "theirs" "themself" true>>
<<gender "xe" "xem" "xyr" "xyrs" "xemself" false>>
```

# `?mcthey, ?mcthem, ?mctheir, ?mctheirs, ?mcthemself, ?mctheyre`
When these are referenced or used, `?mcthey` will randomly take from the sets of pronouns set by the `<<gender>>` macro for the player, and display them. For example, if the pronouns include she/her and they/them, then `?mcthey` will either display "she" or "they", `?mcthem` will either display "her" or "them", and so on. 

The pronouns will be randomized each time any of these are called on. If you want to stick to the last pronoun used, use `$mc_they`, `$mc_them`, etc. See the section about them below under Story Variables.

To capitalize the first letter, use `?mcThey` (they -> They), `?mcThem` (them -> Them), `?mcTheir`, `?mcTheirs`, `?mcThemself`, and `?mcTheyre`.

# Story Variables
These are variables that change depending on what pronoun the last `?mcthey`, `?mcthem`, etc. used.

## `$mc_they, $mc_them, $mc_their, $mc_theirs, $mc_themself, $mc_theyre`
These variables, when referenced, display the pronouns of the last ?mcthey, ?mcthem, etc. So if the previous `?mcthey` yields they/them, then `$mc_they`, `$mc_them`, etc. uses they/them as well. 

These are particularly useful when you want to use a singular pronoun consistently during dialogue or a paragraph for clarity.

To capitalize the first letter, use <<print $mc_they.toUpperFirst()>>, <<print $mc_them.toUpperFirst()>>, and so on.

## `$mc_plural, $mc_is, $mc_was $mc_s, $mc_has`
Just like `$mc_they`, `$mc_them`, etc. `$mc_is`, `$mc_s` and `$mc_has` uses the last `?mc_they` (or the same pronouns as `$mc_they` and `$mc_them`) to determine if the pronouns being used are singular or plural. 

If the previous `?mcthey` yields they/them, `$mc_is` will display "are", and `$mc_has` will display "have". `$mc_s` is attached to the end of a verb to make a plural verb into a singular verb, like "they run" (plural) vs. "she runs" (plural).

To capitalize the first letter, use <<print $mc_is.toUpperFirst()>>, <<print $mc_has.toUpperFirst()>>, and so on.

If you're using past tense, you can use $mc_was instead of $mc_is.
