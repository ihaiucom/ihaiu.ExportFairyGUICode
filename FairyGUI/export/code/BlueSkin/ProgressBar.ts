/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlueSkin {

	export class ProgressBar extends fairygui.GProgressBar {

		public n1:fairygui.GImage;
		public bar:fairygui.GImage;

		public static URL:string = "ui://stv9j6m6raoc1h";

		public static createInstance():ProgressBar {
			return <ProgressBar><any>(fairygui.UIPackage.createObject("BlueSkin","ProgressBar"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.bar = <fairygui.GImage><any>(this.getChild("bar"));
		}
	}
}