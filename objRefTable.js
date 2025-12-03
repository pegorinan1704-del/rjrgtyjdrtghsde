const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Car,
		C3.Behaviors.DragnDrop,
		C3.Behaviors.bound,
		C3.Behaviors.TileMovement,
		C3.Behaviors.jumpthru,
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{sfondoGioco: 0},
	{Automobile: 0},
	{TrascinaERilascia: 0},
	{personaggio: 0},
	{paperaPersonaggio: 0},
	{paperaPersonaggio2: 0},
	{LegatoAlLayout: 0},
	{MovimentoATessera: 0},
	{paperaPersonaggio3: 0},
	{s: 0},
	{n: 0},
	{SaltaAttraverso: 0},
	{c: 0},
	{SfondoAffiancato: 0},
	{sfondoGioco2: 0},
	{sfondoGioco3: 0},
	{sfondoGioco4: 0},
	{sfondoGioco5: 0},
	{sfondoGioco6: 0},
	{c2: 0},
	{n2: 0},
	{s2: 0},
	{sfondoGioco7: 0},
	{c3: 0},
	{n3: 0},
	{s3: 0}
];

self.InstanceType = {
	sfondoGioco: class extends self.ISpriteInstance {},
	personaggio: class extends self.ISpriteInstance {},
	paperaPersonaggio: class extends self.ISpriteInstance {},
	paperaPersonaggio2: class extends self.ISpriteInstance {},
	paperaPersonaggio3: class extends self.ISpriteInstance {},
	s: class extends self.ISpriteInstance {},
	n: class extends self.ISpriteInstance {},
	c: class extends self.ISpriteInstance {},
	SfondoAffiancato: class extends self.ITiledBackgroundInstance {},
	sfondoGioco2: class extends self.ISpriteInstance {},
	sfondoGioco3: class extends self.ISpriteInstance {},
	sfondoGioco4: class extends self.ISpriteInstance {},
	sfondoGioco5: class extends self.ISpriteInstance {},
	sfondoGioco6: class extends self.ISpriteInstance {},
	c2: class extends self.ISpriteInstance {},
	n2: class extends self.ISpriteInstance {},
	s2: class extends self.ISpriteInstance {},
	sfondoGioco7: class extends self.ISpriteInstance {},
	c3: class extends self.ISpriteInstance {},
	n3: class extends self.ISpriteInstance {},
	s3: class extends self.ISpriteInstance {}
}