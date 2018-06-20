/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlackSkin {

	export class IconButton extends fairygui.GButton {

		public button:fairygui.Controller;
		public n7:fairygui.GImage;
		public n5:fairygui.GImage;
		public n6:fairygui.GImage;
		public icon:fairygui.GLoader;

		public static URL:string = "ui://s1yj9w6mp7th5";

		public static createInstance():IconButton {
			return <IconButton><any>(fairygui.UIPackage.createObject("BlackSkin","IconButton"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.button = this.getController("button");
			this.n7 = <fairygui.GImage><any>(this.getChild("n7"));
			this.n5 = <fairygui.GImage><any>(this.getChild("n5"));
			this.n6 = <fairygui.GImage><any>(this.getChild("n6"));
			this.icon = <fairygui.GLoader><any>(this.getChild("icon"));
		}
	}
}