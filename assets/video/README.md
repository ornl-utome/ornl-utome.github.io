# UtoMe demonstrations

| File | Comparison | Overall error | Relative error reduction |
|---|---|---|---|
| `uncertainty-guidance.mp4` | Dynamics only vs. UtoMe-E | 58.60 → 53.00 | 9.6% |
| `spatial-alignment.mp4` | Shuffled uncertainty vs. UtoMe-E | 62.30 → 53.00 | 14.9% |

Both comparisons use the paper's ERA5 1.40625°, 72-hour, 50% token reduction setting: 2,048 initial tokens, 1,024 remaining tokens and 0.55× encoder FLOPs. Relative reduction is `(control error − UtoMe error) / control error × 100`. These controls differ from the ToMe comparison in the main results table.

Weather inputs and EDA spread are real. Top-512 protection masks are recomputed using dynamics alone, dynamics minus aligned uncertainty, or dynamics minus spatially shuffled uncertainty. Uncertainty is a relative input-reliability proxy; high uncertainty alone does not imply high importance.

Merge groups, particle motion and model passage illustrate the mechanism. The endpoint errors are aggregate paper ablations, not measured errors for the displayed input. Animation timing does not represent latency. The spatial shuffle preserves all uncertainty values and changes only their spatial locations.

Both files are 960×672, H.264/yuv420p, 30 FPS, silent, with faststart. Each lasts 18 seconds, including a one-second final hold. The first retains the selected v10 video; the second applies the same result layout and method label to the v8 spatial control. Rendering source, original input arrays, paper snapshot and QA are retained in the local research workspace under `uq/paper-homepage-videos/v11/`.

## Background and method animation

- `hero-shuffle.mp4`: three value-preserving spatial rearrangements of the same real EDA spread field, with 2,048 tiles. The last arrangement returns to the first for a continuous loop. This decorative background makes no accuracy or timing claim. Web export: 1152×672, 24 FPS, 18 seconds.
- `method-variants.mp4`: simultaneous E/P/S paths, transitioning between training and inference. Weather, EDA, teacher and predicted-importance textures come from the paper's existing predictor-comparison figure. E keeps external EDA guidance at deployment. P uses EDA-supervised importance prediction; S uses the current paper's local 3×3 inconsistency teacher. P/S show early transformer layers before the predictor and subsequent merging. Web export: 1440×840, 30 FPS, 18 seconds.
- `method-mobile.mp4`: portrait arrangement of those same paths, cycling through E, P and S automatically. Web export: 800×850, 30 FPS, 18 seconds.

The method animations illustrate routing, supervision and merging; they are not newly executed training or prediction runs. Their colored maps are sampled RGB renderings from the existing qualitative figure. Outlined anchors, merge partners and layer pulses are schematic, not recovered learned masks, feature-similarity matches or measured latency. The S teacher follows the current manuscript rather than the older PPT's masked-tile wording. No new forecast result is introduced.

All videos are silent H.264/yuv420p with faststart. Source scripts, input arrays, reference PPT/PDF and QA for the new animations are retained locally in `uq/paper-homepage-videos/v12/`.

## Display

The page centers only the dynamics-only versus UtoMe demonstration. The spatial-alignment file is retained as an alternative asset but is not displayed. The hero uses blue tiles over a near-white mint backdrop (#f1f8f3), with dark text and a light scrim. The navigation, badge and surrounding sections retain the green palette.

The final hero source and QA are retained locally in `uq/paper-homepage-videos/v15/`. Its tile data, trajectories and timing follow the original shuffle animation. The E/P/S method exports are unchanged.
