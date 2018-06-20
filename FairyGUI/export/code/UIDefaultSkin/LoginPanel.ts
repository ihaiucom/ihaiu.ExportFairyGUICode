/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.UIDefaultSkin {

	export class LoginPanel extends fairygui.GComponent {

		public windowBg:fairygui.GImage;
		public helpButton:HelpButton;
		public formBg:fairygui.GImage;
		public enterButton:RedButton;
		public usernameInput:TextInput;
		public usernameKey:fairygui.GTextField;
		public usernameGroup:fairygui.GGroup;
		public passwordInput:TextInput;
		public passwordKey:fairygui.GTextField;
		public passwordGroup:fairygui.GGroup;
		public checkbox:fairygui.GButton;
		public rightArrow:RightArrow;
		public n22:ComComboBox;
		public n23:fairygui.GMovieClip;
		public n24:ComButtonCheck;
		public n25:ComButtonNormal;
		public n26:ComButtonRadio;
		public n27:ComLabel;
		public n28:ComProgressBar;
		public n29:ComScrollBar;
		public n30:PopupMenu1;
		public n31:Slider1;

		public static URL:string = "ui://snq31xvrraoc0";

		public static createInstance():LoginPanel {
			return <LoginPanel><any>(fairygui.UIPackage.createObject("UIDefaultSkin","LoginPanel"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.windowBg = <fairygui.GImage><any>(this.getChild("windowBg"));
			this.helpButton = <HelpButton><any>(this.getChild("helpButton"));
			this.formBg = <fairygui.GImage><any>(this.getChild("formBg"));
			this.enterButton = <RedButton><any>(this.getChild("enterButton"));
			this.usernameInput = <TextInput><any>(this.getChild("usernameInput"));
			this.usernameKey = <fairygui.GTextField><any>(this.getChild("usernameKey"));
			this.usernameGroup = <fairygui.GGroup><any>(this.getChild("usernameGroup"));
			this.passwordInput = <TextInput><any>(this.getChild("passwordInput"));
			this.passwordKey = <fairygui.GTextField><any>(this.getChild("passwordKey"));
			this.passwordGroup = <fairygui.GGroup><any>(this.getChild("passwordGroup"));
			this.checkbox = <fairygui.GButton><any>(this.getChild("checkbox"));
			this.rightArrow = <RightArrow><any>(this.getChild("rightArrow"));
			this.n22 = <ComComboBox><any>(this.getChild("n22"));
			this.n23 = <fairygui.GMovieClip><any>(this.getChild("n23"));
			this.n24 = <ComButtonCheck><any>(this.getChild("n24"));
			this.n25 = <ComButtonNormal><any>(this.getChild("n25"));
			this.n26 = <ComButtonRadio><any>(this.getChild("n26"));
			this.n27 = <ComLabel><any>(this.getChild("n27"));
			this.n28 = <ComProgressBar><any>(this.getChild("n28"));
			this.n29 = <ComScrollBar><any>(this.getChild("n29"));
			this.n30 = <PopupMenu1><any>(this.getChild("n30"));
			this.n31 = <Slider1><any>(this.getChild("n31"));
		}
	}
}