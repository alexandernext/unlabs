
function formatNation (nation) {
  if (!nation.id) { return nation.text; }
  var $nation = $(
    '<span><img class="img-responsive flag-selection inline" src="/flags/' + nation.element.title + '" />' + nation.text + '</span>'
  );
  return $nation;
};


function initForm(){
  $("#relationship_country_id").select2({
    templateResult: formatNation,
    templateSelection: formatNation
  });
  $("#relationship_friend_id").select2({
    templateResult: formatNation,
    templateSelection: formatNation
  });
}


function initCountryForm(){
  $("#country_id").select2({
    templateResult: formatNation,
    templateSelection: formatNation
  });
}
