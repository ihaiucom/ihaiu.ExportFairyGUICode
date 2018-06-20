/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlackSkin {

	export class TitleBar extends fairygui.GButton {

		public button:fairygui.Controller;
		public n1:fairygui.GImage;
		public title:fairygui.GTextField;
		public n3:fairygui.GImage;
		public n4:fairygui.GImage;

		public static URL:string = "ui://s1yj9w6mp7th3a";

		public static createInstance():TitleBar {
			return <TitleBar><any>(fairygui.UIPackage.createObject("BlackSkin","TitleBar"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.button = this.getController("button");
			this.n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.title = <fairygui.GTextField><any>(this.getChild("title"));
			this.n3 = <fairygui.GImage><any>(this.getChild("n3"));
			this.n4 = <fairygui.GImage><any>(this.getChild("n4"));
		}
	}
}