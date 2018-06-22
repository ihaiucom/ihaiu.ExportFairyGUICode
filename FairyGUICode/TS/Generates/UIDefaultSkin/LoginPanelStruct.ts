/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

namespace fgui.UIDefaultSkin
{
	export class LoginPanelStruct extends fairygui.GComponent
	{
		public m_windowBg : fairygui.GImage;
		public m_formBg : fairygui.GImage;
		public m_usernameKey : fairygui.GTextField;
		public m_usernameGroup : fairygui.GGroup;
		public m_passwordKey : fairygui.GTextField;
		public m_passwordGroup : fairygui.GGroup;
		public m_n23 : fairygui.GMovieClip;
		public m_helpButton : HelpButton;
		public m_enterButton : RedButton;
		public m_usernameInput : TextInput;
		public m_passwordInput : TextInput;
		public m_checkbox : fgui.BlackSkin.Checkbox;
		public m_rightArrow : RightArrow;
		public m_n22 : ComComboBox;
		public m_n24 : ComButtonCheck;
		public m_n25 : ComButtonNormal;
		public m_n26 : ComButtonRadio;
		public m_n27 : ComLabel;
		public m_n28 : ComProgressBar;
		public m_n29 : ComScrollBar;
		public m_n30 : PopupMenu1;
		public m_n31 : Slider1;

		
		public static URL:string = "ui://snq31xvrraoc0";

		

		public constructor() 
		{
			super();
		}

		protected constructFromXML(xml: any): void 
		{
			super.constructFromXML(xml);
			

			
			this.m_windowBg = <fairygui.GImage><any>(this.getChild("windowBg"));
			this.m_formBg = <fairygui.GImage><any>(this.getChild("formBg"));
			this.m_usernameKey = <fairygui.GTextField><any>(this.getChild("usernameKey"));
			this.m_usernameGroup = <fairygui.GGroup><any>(this.getChild("usernameGroup"));
			this.m_passwordKey = <fairygui.GTextField><any>(this.getChild("passwordKey"));
			this.m_passwordGroup = <fairygui.GGroup><any>(this.getChild("passwordGroup"));
			this.m_n23 = <fairygui.GMovieClip><any>(this.getChild("n23"));
			this.m_helpButton = <HelpButton><any>(this.getChild("helpButton"));
			this.m_enterButton = <RedButton><any>(this.getChild("enterButton"));
			this.m_usernameInput = <TextInput><any>(this.getChild("usernameInput"));
			this.m_passwordInput = <TextInput><any>(this.getChild("passwordInput"));
			this.m_checkbox = <fgui.BlackSkin.Checkbox><any>(this.getChild("checkbox"));
			this.m_rightArrow = <RightArrow><any>(this.getChild("rightArrow"));
			this.m_n22 = <ComComboBox><any>(this.getChild("n22"));
			this.m_n24 = <ComButtonCheck><any>(this.getChild("n24"));
			this.m_n25 = <ComButtonNormal><any>(this.getChild("n25"));
			this.m_n26 = <ComButtonRadio><any>(this.getChild("n26"));
			this.m_n27 = <ComLabel><any>(this.getChild("n27"));
			this.m_n28 = <ComProgressBar><any>(this.getChild("n28"));
			this.m_n29 = <ComScrollBar><any>(this.getChild("n29"));
			this.m_n30 = <PopupMenu1><any>(this.getChild("n30"));
			this.m_n31 = <Slider1><any>(this.getChild("n31"));
			
			
		}
	}
}