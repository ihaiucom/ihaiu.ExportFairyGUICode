/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlackSkin {

	export class TreeExpandButton extends fairygui.GButton {

		public button:fairygui.Controller;
		public n1:fairygui.GImage;
		public n2:fairygui.GImage;

		public static URL:string = "ui://s1yj9w6mp7th3d";

		public static createInstance():TreeExpandButton {
			return <TreeExpandButton><any>(fairygui.UIPackage.createObject("BlackSkin","TreeExpandButton"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.button = this.getController("button");
			this.n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.n2 = <fairygui.GImage><any>(this.getChild("n2"));
		}
	}
}