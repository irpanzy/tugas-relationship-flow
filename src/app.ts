enum RelationshipStage {
  SINGLE = "SINGLE",
  KENALAN = "KENALAN",
  TAARUF = "TAARUF",
  PDK = "PDK",
  KONFESS = "KONFESS",
  PACARAN = "PACARAN",
  LAMARAN = "LAMARAN",
  SELINGKUH = "SELINGKUH",
  PUTUS = "PUTUS",
  MENIKAH = "MENIKAH",
}

const transitions: { [key in RelationshipStage]: RelationshipStage[] } = {
  [RelationshipStage.SINGLE]: [RelationshipStage.KENALAN],
  [RelationshipStage.KENALAN]: [
    RelationshipStage.PDK,
    RelationshipStage.PACARAN,
  ],
  [RelationshipStage.PDK]: [RelationshipStage.KONFESS],
  [RelationshipStage.PACARAN]: [
    RelationshipStage.SELINGKUH,
    RelationshipStage.LAMARAN,
  ],
  [RelationshipStage.SELINGKUH]: [RelationshipStage.PUTUS],
  [RelationshipStage.PUTUS]: [RelationshipStage.SINGLE],
  [RelationshipStage.LAMARAN]: [RelationshipStage.MENIKAH],
  [RelationshipStage.MENIKAH]: [],
  [RelationshipStage.TAARUF]: [RelationshipStage.MENIKAH],
  [RelationshipStage.KONFESS]: [RelationshipStage.PACARAN],
};

function getPossibleTransitions(stage: RelationshipStage): RelationshipStage[] {
  return transitions[stage] || [];
}

Object.values(RelationshipStage).forEach((stage) => {
  const possibleNextStages = getPossibleTransitions(stage);
  console.log(`Possible next stages from ${stage}:`);
  if (possibleNextStages.length > 0) {
    possibleNextStages.forEach((nextStage) => console.log(`- ${nextStage}`));
  } else {
    console.log("- No possible transitions");
  }
  console.log();
});
