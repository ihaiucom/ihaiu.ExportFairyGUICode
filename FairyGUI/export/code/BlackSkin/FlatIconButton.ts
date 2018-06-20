/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlackSkin {

	export class FlatIconButton extends fairygui.GButton {

		public button:fairygui.Controller;
		public n7:fairygui.GImage;
		public icon:fairygui.GLoader;

		public static URL:string = "ui://s1yj9w6mp7th4";

		public static createInstance():FlatIconButton {
			return <FlatIconButton><any>(fairygui.UIPackage.createObject("BlackSkin","FlatIconButton"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.button = this.getController("button");
			this.n7 = <fairygui.GImage><any>(this.getChild("n7"));
			this.icon = <fairygui.GLoader><any>(this.getChild("icon"));
		}
	}
}