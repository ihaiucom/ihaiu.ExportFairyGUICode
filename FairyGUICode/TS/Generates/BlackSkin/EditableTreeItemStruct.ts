/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlackSkin
{
	export class EditableTreeItemStruct extends fairygui.GButton
	{
		public m_button : fairygui.Controller;
		public m_c1 : fairygui.Controller;
		public m_n0 : fairygui.GImage;
		public m_n1 : fairygui.GImage;
		public m_title : fairygui.GTextField;
		public m_indent : fairygui.GGraph;
		public m_icon : fairygui.GLoader;
		public m_n8 : fairygui.GImage;
		public m_input : fairygui.GTextInput;
		public m_n9 : fairygui.GGroup;
		public m_sign : fairygui.GLoader;
		public m_expandButton : TreeExpandButton;

		
		public static URL:string = "ui://s1yj9w6mp7th3e";

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			
			this.m_button = this.getController("button");
			this.m_c1 = this.getController("c1");

			
			this.m_n0 = <fairygui.GImage><any>(this.getChild("n0"));
			this.m_n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
			this.m_indent = <fairygui.GGraph><any>(this.getChild("indent"));
			this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
			this.m_n8 = <fairygui.GImage><any>(this.getChild("n8"));
			this.m_input = <fairygui.GTextInput><any>(this.getChild("input"));
			this.m_n9 = <fairygui.GGroup><any>(this.getChild("n9"));
			this.m_sign = <fairygui.GLoader><any>(this.getChild("sign"));
			this.m_expandButton = <TreeExpandButton><any>(this.getChild("expandButton"));
			
			
		}
	}
}