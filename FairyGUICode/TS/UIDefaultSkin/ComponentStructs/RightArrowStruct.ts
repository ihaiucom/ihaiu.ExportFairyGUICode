/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.UIDefaultSkin
{
	export class RightArrowStruct extends fairygui.GComponent
	{
		public m_t0 : fairygui.Transition;
		public m_pic : fairygui.GImage;

		
		public static URL:string = "uiL://snq31xvro24g3r";

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			

			
			this.m_pic = <fairygui.GImage><any>(this.getChild("pic"));
			
			
			this.m_t0 =  this.getTransition("t0");
		}
	}
}