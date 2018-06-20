/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlueSkin {

	export class WindowCloseButton extends fairygui.GButton {

		public button:fairygui.Controller;
		public n1:fairygui.GImage;

		public static URL:string = "ui://stv9j6m6raoc9";

		public static createInstance():WindowCloseButton {
			return <WindowCloseButton><any>(fairygui.UIPackage.createObject("BlueSkin","WindowCloseButton"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.button = this.getController("button");
			this.n1 = <fairygui.GImage><any>(this.getChild("n1"));
		}
	}
}