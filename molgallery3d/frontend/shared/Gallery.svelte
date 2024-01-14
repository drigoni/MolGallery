<script lang="ts">
	import {afterUpdate } from "svelte";
	import Dmol from "3dmol";

	import {BlockLabel, Empty } from "@gradio/atoms";
	import {Image} from "@gradio/icons";

	export let show_label = true;
	export let label: string;
	export let value: { molecule: string; caption: string | null }[] | null = null;
	export let columns: number | number[] | undefined = [2];
	export let rows: number | number[] | undefined = undefined;
	export let height: number | "auto" = "auto";
	export let automatic_rotation: boolean = true;

	// tracks whether the value of the gallery was reset
	let was_reset = true;

	$: was_reset = value == null || value.length == 0 ? true : was_reset;

	let _value: { molecule: string; caption: string | null }[] | null = null;

	$: _value =
		value === null
			? null
			: value.map((data, i) => ({
					molecule: data.molecule,
					caption: data.caption,
			  }));

	let client_height = 0;
	let window_height = 0;

	// Function to initialize 3Dmol.js for each molecule
	function initializeMoleculeViewer(molecule: string, containerId: string): Dmol.GLViewer {
		let viewer = Dmol.createViewer(containerId, {});
		viewer.addModel(molecule, "pdb" + {_value});
		viewer.setStyle({ stick: {} });
		viewer.setBackgroundColor("white");
		viewer.zoomTo();
		viewer.render();
		return viewer;
	}

	// Rotate the viewer automatically
	function rotateMolecule(viewer: Dmol.GLViewer) {
			viewer.rotate(0.3, 'y')
			viewer.rotate(0.3, 'x')
			requestAnimationFrame((time) => rotateMolecule(viewer));
	}

	// function to download the image on right click
	function handleContextMenu(event) {
		event.preventDefault();
		
		// Get the data URL of the canvas
		const canvas = event.target;
		const canvas_id = event.currentTarget.id;
		console.log(canvas_id);
		var dt = canvas.toDataURL('image/png');
		
		// Trigger the download
		var link = document.createElement('a');
		link.href = dt;
		link.download = canvas_id + '.png';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	afterUpdate(() => {
		// Trigger initialization when the component is mounted
		if (_value) {
			_value.forEach((entry, i) => {
				const containerId = 'mol-canvas-id-' + (i + 1);
				let viewer = initializeMoleculeViewer(entry.molecule, containerId);
				if (automatic_rotation) {
					rotateMolecule(viewer);
				}
			});
		}
	});
</script>

<svelte:window bind:innerHeight={window_height} />

{#if show_label}
	<BlockLabel {show_label} Icon={Image} label={label || "Gallery"} />
{/if}
{#if value === null || _value === null || _value.length === 0}
	<Empty unpadded_box={true} size="large"><Image /></Empty>
{:else}
	<div
		bind:clientHeight={client_height}
		class="grid-wrap"
		class:fixed-height={!height || height == "auto"}
	>
		<div
			class="grid-container"
			style="--grid-cols:{columns}; --grid-rows:{rows}; height: {height};"
			class:pt-6={show_label}
		>
			{#each _value as entry, i}
				<div
					class="molecule-item molecule-lg, mol-container"
					aria-label={"Molecule " + (i + 1) + " of " + _value.length}
				>
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div on:contextmenu={handleContextMenu} id={'mol-canvas-id-' + (i + 1)}  class="mol-canvas"></div>
					{#if entry.caption}
						<div class="caption-label">
							{entry.caption}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
{/if}

<style lang="postcss">
	.fixed-height {
		min-height: var(--size-80);
		max-height: 55vh;
	}

	@media (--screen-xl) {
		.fixed-height {
			min-height: 450px;
		}
	}

	.molecule-item {
		--ring-color: transparent;
		position: relative;
		box-shadow:
			0 0 0 2px var(--ring-color),
			var(--shadow-drop);
		border: 1px solid var(--border-color-primary);
		border-radius: var(--button-small-radius);
		background: var(--background-fill-secondary);
		aspect-ratio: var(--ratio-square);
		width: var(--size-full);
		height: var(--size-full);
		overflow: clip;
	}

	.molecule-item:hover {
		--ring-color: var(--color-accent);
		filter: brightness(1.1);
	}

	.grid-wrap {
		position: relative;
		padding: var(--size-2);
		height: var(--size-full);
		overflow-y: scroll;
	}

	.grid-container {
		display: grid;
		position: relative;
		grid-template-rows: repeat(var(--grid-rows), minmax(100px, 1fr));
		grid-template-columns: repeat(var(--grid-cols), minmax(100px, 1fr));
		grid-auto-rows: minmax(100px, 1fr);
		gap: var(--spacing-lg);
	}

	.mol-canvas {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}

	.caption-label {
		position: absolute;
		right: var(--block-label-margin);
		bottom: var(--block-label-margin);
		z-index: var(--layer-1);
		border-top: 1px solid var(--border-color-primary);
		border-left: 1px solid var(--border-color-primary);
		border-radius: var(--block-label-radius);
		background: var(--background-fill-secondary);
		padding: var(--block-label-padding);
		max-width: 80%;
		overflow: hidden;
		font-size: var(--block-label-text-size);
		text-align: left;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
