/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.BlueSkin
{
	export class DemoStruct extends fairygui.GComponent
	{
		public m_c1 : fairygui.Controller;
		public m_n8 : fairygui.GImage;
		public m_n9 : fairygui.GList;
		public m_n17 : fairygui.GGroup;
		public m_n18 : fairygui.GGraph;
		public m_n0 : Button;
		public m_n1 : Checkbox;
		public m_n2 : RadioButton;
		public m_n3 : InputTextField;
		public m_n5 : InputTextArea;
		public m_n6 : SliderH;
		public m_n7 : SliderV;
		public m_n12 : ProgressBar;
		public m_n13 : ComboBox;
		public m_frame : WindowFrame;
		public m_n20 : Button_icon;
		public m_n21 : Button_icon_text;
		public m_n14 : TabButton;
		public m_n15 : TabButton;
		public m_n16 : TabButton;

		
		public static URL:string = "uiL://stv9j6m6raoc19";

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			
			this.m_c1 = this.getController("c1");

			
			this.m_n8 = <fairygui.GImage><any>(this.getChild("n8"));
			this.m_n9 = <fairygui.GList><any>(this.getChild("n9"));
			this.m_n17 = <fairygui.GGroup><any>(this.getChild("n17"));
			this.m_n18 = <fairygui.GGraph><any>(this.getChild("n18"));
			this.m_n0 = <Button><any>(this.getChild("n0"));
			this.m_n1 = <Checkbox><any>(this.getChild("n1"));
			this.m_n2 = <RadioButton><any>(this.getChild("n2"));
			this.m_n3 = <InputTextField><any>(this.getChild("n3"));
			this.m_n5 = <InputTextArea><any>(this.getChild("n5"));
			this.m_n6 = <SliderH><any>(this.getChild("n6"));
			this.m_n7 = <SliderV><any>(this.getChild("n7"));
			this.m_n12 = <ProgressBar><any>(this.getChild("n12"));
			this.m_n13 = <ComboBox><any>(this.getChild("n13"));
			this.m_frame = <WindowFrame><any>(this.getChild("frame"));
			this.m_n20 = <Button_icon><any>(this.getChild("n20"));
			this.m_n21 = <Button_icon_text><any>(this.getChild("n21"));
			this.m_n14 = <TabButton><any>(this.getChild("n14"));
			this.m_n15 = <TabButton><any>(this.getChild("n15"));
			this.m_n16 = <TabButton><any>(this.getChild("n16"));
			
			
		}
	}
}