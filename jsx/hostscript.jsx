/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/

$._PPP_={
	getSep : function () {
		if (Folder.fs === 'Macintosh') {
			return '/';
		} else {
			return '\\';
		}
	},}


function reportCurrentProjectSelection() {
        var viewIDs = app.getProjectViewIDs(); // sample code optimized for a single open project

        var viewSelection = app.getProjectViewSelection(viewIDs[0]);
          //          $.write(viewSelection);
        viewSelection.sort(function(a, b) {
                return a.name.localeCompare(b.name)
                });
        return viewSelection
}


function exportXML(){
    /*alert("Exporting XMLs from active bin...");*/
    var abin = app.project.getInsertionBin()
    var xpath = app.getAppPrefPath
    var i
    var t
    var v

    var currentSelection = reportCurrentProjectSelection()

    var projPath 		= new File(app.project.path);
    var parentDir 		= projPath.parent;

    var xmlExtension 	= '.xml';

    var seqArray        = abin.children;
    var eArray = [];
    var outputPath      = Folder.selectDialog("Choose the output directory");


if (outputPath) {
    /*
for (i = 0; i<seqArray.length; i++)
{
    var sequencenid = seqArray[i].name;

    eArray.push(sequencenid);
}*/

for (i = 0; i<currentSelection.length; i++){

    var sequencenid = currentSelection[i].name;

    eArray.push(sequencenid);
}


    var cArray = app.project.sequences;

    for (t=0;t<eArray.length;t++){

        for (v=0;v<cArray.length;v++){

            if (cArray[v].name == eArray[t]){

                app.project.openSequence(cArray[v].sequenceID)
                var outputName 		= app.project.activeSequence.name;
                var completeOutputPath = outputPath.fsName + $._PPP_.getSep() + outputName + xmlExtension;
                app.project.activeSequence.exportAsFinalCutProXML(completeOutputPath, 1); // 1 == suppress UI
 
            }
        }
    }
    

//}
			} else {
$._PPP_.updateEventPanel("No output path chosen.");
			}

	}
    
    
    

//

function exportAAF(){
    /*alert("Exporting XMLs from active bin...");*/
    var abin = app.project.getInsertionBin()
    var xpath = app.getAppPrefPath
    var i
    var t
    var v

    var currentSelection = reportCurrentProjectSelection()

    var projPath 		= new File(app.project.path);
    var parentDir 		= projPath.parent;

    var xmlExtension 	= '.aaf';

    var seqArray        = abin.children;
    var eArray = [];
    var outputPath      = Folder.selectDialog("Choose the output directory");


if (outputPath) {
    /*
for (i = 0; i<seqArray.length; i++)
{
    var sequencenid = seqArray[i].name;

    eArray.push(sequencenid);
}*/

for (i = 0; i<currentSelection.length; i++){

    var sequencenid = currentSelection[i].name;

    eArray.push(sequencenid);
}


    var cArray = app.project.sequences;

    for (t=0;t<eArray.length;t++){

        for (v=0;v<cArray.length;v++){

            if (cArray[v].name == eArray[t]){

                app.project.openSequence(cArray[v].sequenceID)
                var outputName 		= app.project.activeSequence.name;
                var omfName 		= app.project.activeSequence.name + xmlExtension;

                var completeOutputPath = outputPath.fsName + $._PPP_.getSep() + outputName + xmlExtension;
                //TEMPLATE app.project.exportAAF(sequenceToExport, outputPath, mixdownVideo, explodeToMono, sampleRate, bitsPerSample, embedAudio, audioFileFormat, trimSources, handleFrames, presetPath, renderAudioEffects, includeClipCopies, preserveParentFolder)
                app.project.exportAAF(cArray[v], completeOutputPath, 0, 1, 48000, 16, 1, 1, 1, 240, "", 0, 0, 1)
 
            }
        }
    }
    

//}
			} else {
$._PPP_.updateEventPanel("No output path chosen.");
			}

	}

//

function exportOMF(){
    /*alert("Exporting XMLs from active bin...");*/
    var abin = app.project.getInsertionBin()
    var xpath = app.getAppPrefPath
    var i
    var t
    var v

    var currentSelection = reportCurrentProjectSelection()

    var projPath 		= new File(app.project.path);
    var parentDir 		= projPath.parent;

    var xmlExtension 	= '.omf';

    var seqArray        = abin.children;
    var eArray = [];
    var outputPath      = Folder.selectDialog("Choose the output directory");


if (outputPath) {
    /*
for (i = 0; i<seqArray.length; i++)
{
    var sequencenid = seqArray[i].name;

    eArray.push(sequencenid);
}*/

for (i = 0; i<currentSelection.length; i++){

    var sequencenid = currentSelection[i].name;

    eArray.push(sequencenid);
}


    var cArray = app.project.sequences;

    for (t=0;t<eArray.length;t++){

        for (v=0;v<cArray.length;v++){

            if (cArray[v].name == eArray[t]){

                app.project.openSequence(cArray[v].sequenceID)
                var outputName 		= app.project.activeSequence.name;
                var omfName 		= app.project.activeSequence.name + xmlExtension;

                var completeOutputPath = outputPath.fsName + $._PPP_.getSep() + outputName + xmlExtension;
                //TEMPLATE app.project.exportOMF(sequence, outputPath, omfTitle, sampleRate, bitsPerSample, audioEncapsulated, audioFileFormat, trimAudioFiles, handleFrames, includePan)
                app.project.exportOMF(cArray[v], completeOutputPath, omfName, 48000, 16, 1, 0, 1, 240, 0)
 
            }
        }
    }
    

//}
			} else {
$._PPP_.updateEventPanel("No output path chosen.");
			}

	}