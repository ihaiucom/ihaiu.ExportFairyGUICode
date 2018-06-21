/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.UIDefaultSkin {

	export class TestCom extends fairygui.GComponent {

		public n0:ComButtonCheck;
		public n1:ComButtonNormal;
		public n2:ComButtonRadio;
		public n3:ComComboBox;
		public n4:ComComboBox_item;
		public n5:ComComboBox_popup;
		public n6:ComLabel;
		public n7:fairygui.GMovieClip;
		public n8:ComProgressBar;
		public n9:ComScrollBar;
		public n10:ComScrollBar_arrow1;
		public n11:ComScrollBar_arrow2;
		public n12:ComScrollBar_grip;
		public n13:PopupMenu1;
		public n14:PopupMenu1_item;
		public rightArrow:RightArrow;
		public n16:Slider1;
		public n17:Slider1_grip;
		public n18:TestGroup;
		public n19:TestList;
		public n20:TestText;
		public n21:fairygui.GButton;
		public n22:fairygui.GButton;
		public n23:fairygui.GButton;
		public helpButton:HelpButton;

		public static URL:string = "ui://snq31xvroett4f";

		public static createInstance():TestCom {
			return <TestCom><any>(fairygui.UIPackage.createObject("UIDefaultSkin","TestCom"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.n0 = <ComButtonCheck><any>(this.getChild("n0"));
			this.n1 = <ComButtonNormal><any>(this.getChild("n1"));
			this.n2 = <ComButtonRadio><any>(this.getChild("n2"));
			this.n3 = <ComComboBox><any>(this.getChild("n3"));
			this.n4 = <ComComboBox_item><any>(this.getChild("n4"));
			this.n5 = <ComComboBox_popup><any>(this.getChild("n5"));
			this.n6 = <ComLabel><any>(this.getChild("n6"));
			this.n7 = <fairygui.GMovieClip><any>(this.getChild("n7"));
			this.n8 = <ComProgressBar><any>(this.getChild("n8"));
			this.n9 = <ComScrollBar><any>(this.getChild("n9"));
			this.n10 = <ComScrollBar_arrow1><any>(this.getChild("n10"));
			this.n11 = <ComScrollBar_arrow2><any>(this.getChild("n11"));
			this.n12 = <ComScrollBar_grip><any>(this.getChild("n12"));
			this.n13 = <PopupMenu1><any>(this.getChild("n13"));
			this.n14 = <PopupMenu1_item><any>(this.getChild("n14"));
			this.rightArrow = <RightArrow><any>(this.getChild("rightArrow"));
			this.n16 = <Slider1><any>(this.getChild("n16"));
			this.n17 = <Slider1_grip><any>(this.getChild("n17"));
			this.n18 = <TestGroup><any>(this.getChild("n18"));
			this.n19 = <TestList><any>(this.getChild("n19"));
			this.n20 = <TestText><any>(this.getChild("n20"));
			this.n21 = <fairygui.GButton><any>(this.getChild("n21"));
			this.n22 = <fairygui.GButton><any>(this.getChild("n22"));
			this.n23 = <fairygui.GButton><any>(this.getChild("n23"));
			this.helpButton = <HelpButton><any>(this.getChild("helpButton"));
		}
	}
}