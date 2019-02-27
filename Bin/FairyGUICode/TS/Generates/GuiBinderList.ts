/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BlackSkinBinder from "./BlackSkin/BlackSkinBinder";
import BlueSkinBinder from "./BlueSkin/BlueSkinBinder";
import SpriteGuoqiBinder from "./SpriteGuoqi/SpriteGuoqiBinder";
import SpriteIconBinder from "./SpriteIcon/SpriteIconBinder";
import UIDefaultSkinBinder from "./UIDefaultSkin/UIDefaultSkinBinder";

export default class GuiBinderList
{
	static fguiBinderAll()
	{
		BlackSkinBinder.bindAll()
		BlueSkinBinder.bindAll()
		SpriteGuoqiBinder.bindAll()
		SpriteIconBinder.bindAll()
		UIDefaultSkinBinder.bindAll()
	}
}