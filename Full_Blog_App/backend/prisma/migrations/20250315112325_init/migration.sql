-- RedefineIndex
CREATE UNIQUE INDEX `_wpiskategoria_AB_unique` ON `_wpiskategoria`(`A`, `B`);
DROP INDEX `_WpisKategoria_AB_unique` ON `_wpiskategoria`;

-- RedefineIndex
CREATE INDEX `_wpiskategoria_B_index` ON `_wpiskategoria`(`B`);
DROP INDEX `_WpisKategoria_B_index` ON `_wpiskategoria`;
