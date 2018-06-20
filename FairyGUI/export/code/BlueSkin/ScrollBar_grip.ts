/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlueSkin {

	export class ScrollBar_grip extends fairygui.GButton {

		public button:fairygui.Controller;
		public n1:fairygui.GImage;
		public n2:fairygui.GImage;
		public icon:fairygui.GLoader;

		public static URL:string = "ui://stv9j6m6raoc6";

		public static createInstance():ScrollBar_grip {
			return <ScrollBar_grip><any>(fairygui.UIPackage.createObject("BlueSkin","ScrollBar_grip"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.button = this.getController("button");
			this.n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.n2 = <fairygui.GImage><any>(this.getChild("n2"));
			this.icon = <fairygui.GLoader><any>(this.getChild("icon"));
		}
	}
}