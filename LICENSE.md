# License

## Application code

The sync.bible application code is licensed under the GNU General Public
License, version 2.0 only (GPLv2).

This applies to the project source code unless a file or directory includes a
more specific license notice.

## Bible texts and translation data

The Bible texts in `public/bibles/` are licensed separately from the
application code. They are not automatically covered by the project's GPLv2
license.

Each Bible JSON file may include a `meta` object with fields such as `source`,
`license`, and `copyright`. Those fields are the authoritative license and
copyright notice for that Bible text within this repository.

Examples of licenses and permissions currently represented in `public/bibles/`
include:

- Public Domain
- GPL
- GFDL
- Creative Commons licenses, including BY, BY-SA, BY-ND, BY-NC-SA, and
  BY-NC-ND variants
- Copyrighted texts with free non-commercial distribution permission
- Copyrighted texts with distribution permission granted to CrossWire
- Copyrighted texts with distribution permission granted to eBible.org

Some of these licenses restrict commercial use, derivative works, redistribution
outside a specific channel, or other uses. Do not assume that a Bible text may be
modified, redistributed, or used commercially just because it is included in this
repository.

If a Bible file does not include license metadata, no license should be assumed
for that text until its provenance and permissions are confirmed.

## Other data files

Other project data files, including files in `public/data/`, should be treated
according to any license, source, or copyright notice attached to the file or its
upstream source. If no such notice exists, clarify the provenance before reusing
or redistributing the data outside this project.

## Summary

In short:

- sync.bible application code: GPLv2.
- Bible texts in `public/bibles/`: separately licensed per file.
- Missing Bible metadata: requires follow-up before making reuse claims.

