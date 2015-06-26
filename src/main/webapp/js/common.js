/**
 * 生命の計算。(基本成長率＋初期ステータス耐久*1.2)*Lv
 * @param jobid 職業シーケンシャル値。jobbase.jsonに登録されている順。
 * @param vit 初期ステータス耐久値
 * @param lv レベル
 */
var hp = function(jobid , vit , lv) {
	return parseInt(
			( _growth[jobid][0] + vit * 12 ) *0.1 * lv;
		);
};

/**
 * 気合の計算。(基本成長率＋初期ステータス知力*1.2)*Lv
 */
var mp = function(jobid , itl , lv) {
	return parseInt(
			( _growth[jobid][1] + itl * 12 ) *0.1 * lv;
		);
};

/**
 * 各ステータスの算出。基本5ステータスと属性で算出方法をわける。
 * どのステータスかはstatusIdで判定する。
 * @param jobid 職業ID
 * @param statusId ステータスID。腕力:0,耐久:1,器用:2,知力:3,魅力:4,土:5.....
 * @param lv レベル
 * @param firstStatus ステータスの初期振り値
 */
var statusCalc = function(jobid , statusId , lv , firstStatus) {
	var statusObject = new StatusObject(jobid , statusId , lv , firstStatus);

	return ( statusId < 5 ) ?
			basicStatusCalc(statusObject) : elementStatusCalc(statusObject);
};

/**
 * 基本5ステータス値の算出。
 */
var basicStatusCalc = function(statusObject) {

};

/**
 * 属性ステータス値の算出。
 */
var elementStatusCalc = function(statusObject) {

};

/**
 * ステータス計算用ValueObject。
 * @param jobid 職業ID
 * @param statusId ステータスID。腕力:0,耐久:1,器用:2,知力:3,魅力:4,土:5.....
 * @param lv レベル
 * @param firstStatus ステータスの初期振り値
 */
var StatusObject = function(jobid,statusId,lv) {
	this.jobid = jobid;
	this.statusId = statusId;
	this.lv = lv;
	this.firstStatus = firstStatus;
};

/**
 * 職業名ラベル。
 */
var _label = ['侍','陰陽','忍者','僧','神職','鍛冶屋','薬師','傾奇者'];

/**
 * 職業別ステータス成長率。
 * 行：職業
 * 列：生命、気合、腕力、耐久、器用、知力、魅力の順で値は10倍したもの。
 * 属性は職業差なし。
 */
var _growth = [
	[280,220,28,28,18,18,18] ,
	[220,280,18,18,20,28,26] ,
	[244,232,26,20,28,20,20] ,
	[268,256,22,24,18,24,18] ,
	[220,268,18,18,22,26,28] ,
	[256,220,24,26,24,18,22] ,
	[232,244,20,22,26,22,24] ,
	[232,244,22,18,28,24,22]
];

/**
 * 職業別の基礎ステータス
 * 行：職業
 * 列：生命、気合、腕力、耐久、器用、知力、魅力、土、水、火、風の順
 */
var _base = [
	[5,5,3,3,2,5,5,5,5],
	[2,2,4,6,4,7,7,7,7],
	[4,4,5,3,2,6,6,6,6],
	[4,4,2,4,4,6,7,6,6],
	[2,2,4,5,5,7,6,6,7],
	[4,4,5,2,3,5,5,5,5],
	[3,3,4,5,3,6,6,7,6],
	[4,2,5,4,3,6,6,6,6]
];
