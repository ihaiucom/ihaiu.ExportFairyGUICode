/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.UIDefaultSkin
{
	export class TestComStruct extends fairygui.GComponent
	{
		public m_n7 : fairygui.GMovieClip;
		public m_n0 : ComButtonCheck;
		public m_n1 : ComButtonNormal;
		public m_n2 : ComButtonRadio;
		public m_n3 : ComComboBox;
		public m_n4 : ComComboBox_item;
		public m_n5 : ComComboBox_popup;
		public m_n6 : ComLabel;
		public m_n8 : ComProgressBar;
		public m_n9 : ComScrollBar;
		public m_n10 : ComScrollBar_arrow1;
		public m_n11 : ComScrollBar_arrow2;
		public m_n12 : ComScrollBar_grip;
		public m_n13 : PopupMenu1;
		public m_n14 : PopupMenu1_item;
		public m_rightArrow : RightArrow;
		public m_n16 : Slider1;
		public m_n17 : Slider1_grip;
		public m_n18 : TestGroup;
		public m_n19 : TestList;
		public m_n20 : TestText;
		public m_n21 : fgui.BlackSkin.AutoSizeButton;
		public m_n22 : fgui.BlackSkin.Checkbox;
		public m_n23 : fgui.BlackSkin.TabButton;
		public m_helpButton : HelpButton;

		
		public static URL:string = "uiL://snq31xvroett4f";

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			

			
			this.m_n7 = <fairygui.GMovieClip><any>(this.getChild("n7"));
			this.m_n0 = <ComButtonCheck><any>(this.getChild("n0"));
			this.m_n1 = <ComButtonNormal><any>(this.getChild("n1"));
			this.m_n2 = <ComButtonRadio><any>(this.getChild("n2"));
			this.m_n3 = <ComComboBox><any>(this.getChild("n3"));
			this.m_n4 = <ComComboBox_item><any>(this.getChild("n4"));
			this.m_n5 = <ComComboBox_popup><any>(this.getChild("n5"));
			this.m_n6 = <ComLabel><any>(this.getChild("n6"));
			this.m_n8 = <ComProgressBar><any>(this.getChild("n8"));
			this.m_n9 = <ComScrollBar><any>(this.getChild("n9"));
			this.m_n10 = <ComScrollBar_arrow1><any>(this.getChild("n10"));
			this.m_n11 = <ComScrollBar_arrow2><any>(this.getChild("n11"));
			this.m_n12 = <ComScrollBar_grip><any>(this.getChild("n12"));
			this.m_n13 = <PopupMenu1><any>(this.getChild("n13"));
			this.m_n14 = <PopupMenu1_item><any>(this.getChild("n14"));
			this.m_rightArrow = <RightArrow><any>(this.getChild("rightArrow"));
			this.m_n16 = <Slider1><any>(this.getChild("n16"));
			this.m_n17 = <Slider1_grip><any>(this.getChild("n17"));
			this.m_n18 = <TestGroup><any>(this.getChild("n18"));
			this.m_n19 = <TestList><any>(this.getChild("n19"));
			this.m_n20 = <TestText><any>(this.getChild("n20"));
			this.m_n21 = <fgui.BlackSkin.AutoSizeButton><any>(this.getChild("n21"));
			this.m_n22 = <fgui.BlackSkin.Checkbox><any>(this.getChild("n22"));
			this.m_n23 = <fgui.BlackSkin.TabButton><any>(this.getChild("n23"));
			this.m_helpButton = <HelpButton><any>(this.getChild("helpButton"));
			
			
		}
	}
}