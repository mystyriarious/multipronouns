Macro.add("gender", {
  skipArgs : false,
  handler : function() {
    if (this.args.length > 5) {
    State.variables.arr_they.push(this.args[0]);
    State.variables.arr_them.push(this.args[1]);
    State.variables.arr_their.push(this.args[2]);
    State.variables.arr_theirs.push(this.args[3]);
    State.variables.arr_themself.push(this.args[4]);
    State.variables.arr_plural.push(this.args[5]);
    State.variables.prons += 1;
    }
    else {
      return this.error('Not enough arguments to set gender');
    }
  }
});

Macro.add("removeGender", {
  skipArgs : false,
  handler : function() {
    if (this.args.length == 1 && State.variables.prons > 0) {
      let index = State.variables.arr_they.indexOf(this.args[0]);
      if (index > -1) {
        State.variables.arr_they.splice(index, 1);
        State.variables.arr_them.splice(index, 1);
        State.variables.arr_their.splice(index, 1);
        State.variables.arr_theirs.splice(index, 1);
        State.variables.arr_themself.splice(index, 1);
        State.variables.arr_plural.splice(index, 1);
        State.variables.prons -= 1;
      }
      else {
        return this.error("Pronouns not found");
      }
      
    }
    else if (State.variables.prons <= 0) {
      return this.error("No pronouns to remove");
    }
    else if (this.args.length > 1) {
      return this.error("Too many arguments");
    }
    else {
      return this.error("Too little arguments");
    }
  }
});

window.pronouns = function (i) {
    
    var plurality = State.variables.arr_plural[i];
  	if (plurality == true) {
      State.variables.mc_is = "are";
      State.variables.mc_was = "were";
      State.variables.mc_s = "";
      State.variables.mc_theyre = State.variables.arr_they[i] + "\'re";
      State.variables.mc_has = "have";
    }
  	else {
      State.variables.mc_is = "is";
      State.variables.mc_was = "was";
      State.variables.mc_s = "s";
      State.variables.mc_theyre = State.variables.arr_they[i] + "\'s";
      State.variables.mc_has = "has";
    }
    State.variables.mc_they = State.variables.arr_they[i];
    State.variables.mc_them = State.variables.arr_them[i];
    State.variables.mc_their = State.variables.arr_their[i];
    State.variables.mc_theirs = State.variables.arr_theirs[i];
    State.variables.mc_themself = State.variables.arr_themself[i];
}

Template.add (['mcthey', 'mcThey'], function () {
  if (State.variables.prons == 0) {
  return "???";
  }
  else {
	var they = either(State.variables.arr_they);
	var i = State.variables.arr_they.indexOf(they);
	window.pronouns(i);
	return this.name === 'mcThey' ? they.toUpperFirst() : they;
  }
});

Template.add (['mcthem', 'mcThem'], function () {
  if (State.variables.prons == 0) {
  return "???";
  }
  else {
	var them = either(State.variables.arr_them);
    var i = State.variables.arr_them.indexOf(them);
    window.pronouns(i);
	return this.name === 'mcThem' ? them.toUpperFirst() : them;
  }
});

Template.add (['mctheir', 'mcTheir'], function () {
  if (State.variables.prons == 0) {
  return "???";
  }
  else {
	var their = either(State.variables.arr_their);
    var i = State.variables.arr_their.indexOf(their);
    window.pronouns(i);
	return this.name === 'mcTheir' ? their.toUpperFirst() : their;
  }
});

Template.add (['mctheirs', 'mcTheirs'], function () {
  if (State.variables.prons == 0) {
  return "???";
  }
  else {
	var theirs = either(State.variables.arr_theirs);
    var i = State.variables.arr_theirs.indexOf(theirs);
    window.pronouns(i);
	return this.name === 'mcTheirs' ? theirs.toUpperFirst() : theirs;
  }
});

Template.add (['mcthemself', 'mcThemself'], function () {
  if (State.variables.prons == 0) {
  return "???";
  }
  else {
	var themself = either(State.variables.arr_themself);
    var i = State.variables.arr_themself.indexOf(themself);
    window.pronouns(i);
	return this.name === 'mcThemself' ? themself.toUpperFirst() : themself;
  }
});

Template.add (['mctheyre', 'mcTheyre'], function () {
  if (State.variables.prons == 0) {
  return "???";
  }
  else {
	var they = either(State.variables.arr_they);
    var i = State.variables.arr_they.indexOf(they);
    window.pronouns(i);
    var theyre = "";
    if (State.variables.arr_plural[i] == true) {
      theyre = they + "\'re";
      }
    else {
      theyre = they + "\'s";
      }
    return this.name === 'mcTheyre' ? theyre.toUpperFirst() : theyre;
  }
});
