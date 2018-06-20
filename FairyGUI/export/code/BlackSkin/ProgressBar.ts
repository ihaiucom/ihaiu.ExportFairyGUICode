/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlackSkin {

	export class ProgressBar extends fairygui.GProgressBar {

		public n0:fairygui.GImage;
		public bar:fairygui.GImage;

		public static URL:string = "ui://s1yj9w6mp7th2u";

		public static createInstance():ProgressBar {
			return <ProgressBar><any>(fairygui.UIPackage.createObject("BlackSkin","ProgressBar"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.n0 = <fairygui.GImage><any>(this.getChild("n0"));
			this.bar = <fairygui.GImage><any>(this.getChild("bar"));
		}
	}
}