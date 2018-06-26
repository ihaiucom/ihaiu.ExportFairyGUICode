/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.UIDefaultSkin
{
	export class TestGroupStruct extends fairygui.GComponent
	{
		public m_zuwai_start : fairygui.GTextField;
		public m_n0 : fairygui.GGraph;
		public m_n1 : fairygui.GGraph;
		public m_n3 : fairygui.GGraph;
		public m_n4 : fairygui.GGraph;
		public m_zuwai_center : fairygui.GTextField;
		public m_adGroup : fairygui.GGroup;
		public m_zuwai_end : fairygui.GTextField;
		public m_loader : fairygui.GLoader;

		
		public static URL:string = "ui://snq31xvroett4d";

		
		public static createInstance():TestGroup {
			return <TestGroup><any>(fairygui.UIPackage.createObject("UIDefaultSkin","TestGroup"));
		}

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			

			
			this.m_zuwai_start = <fairygui.GTextField><any>(this.getChild("zuwai_start"));
			this.m_n0 = <fairygui.GGraph><any>(this.getChild("n0"));
			this.m_n1 = <fairygui.GGraph><any>(this.getChild("n1"));
			this.m_n3 = <fairygui.GGraph><any>(this.getChild("n3"));
			this.m_n4 = <fairygui.GGraph><any>(this.getChild("n4"));
			this.m_zuwai_center = <fairygui.GTextField><any>(this.getChild("zuwai_center"));
			this.m_adGroup = <fairygui.GGroup><any>(this.getChild("adGroup"));
			this.m_zuwai_end = <fairygui.GTextField><any>(this.getChild("zuwai_end"));
			this.m_loader = <fairygui.GLoader><any>(this.getChild("loader"));
			
			
		}
	}
}