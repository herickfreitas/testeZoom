var Act1 = 5;



function beforeStateEntry(sequenceId){
	
	if (Act1 == sequenceId) {
		var pesquisarColaboradores = hAPI.getCardValue("pesquisarColaboradores");
		log.info("pesquisarColaboradores: "+pesquisarColaboradores);
	}
	
	 
	
}