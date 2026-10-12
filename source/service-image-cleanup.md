# Service image cleanup

The service overview photos, service gallery photos, and shared service-page banner were edited with the built-in ImageGen tool to remove embedded BRITE PROOFINGS text and BP copyright overlays.

Edited assets are saved in `public/assets/clean-services/`. Original source photos remain in `public/assets/img/`. `image-cleanup.json` records source aliases (including enlarged gallery versions), and `clean-service-images.json` maps each scene to its edited asset.

Prompt used for the photos: “Remove only the translucent BRITE PROOFINGS watermark and any BP/Brite Proofings copyright logo overlay from this flooring photograph. Seamlessly restore the surface beneath. Preserve the interior, all objects and people, floor colors, painted lines, texture, reflections, lighting, composition, perspective and original aspect ratio. Do not add branding or text.” For aircraft and decorative scenes, the prompt additionally preserves aircraft, timestamps, artwork and floor patterns.

The banner prompt preserves its wide composition, machinery, columns, cables, yellow and white lines, black hatch edges, floor texture and reflections.

`node scripts/apply-clean-images.mjs` applies the replacements after every photo and the banner are present. Both gallery thumbnails and enlarged views use the cleaned assets.
